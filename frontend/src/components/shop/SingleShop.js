import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import LoadingComponent from "../loading/LoadingComponent";
import { default as axios } from "../../axiosConfig";
import Map from "../Map";
import Information from "./Information";
import ShopReview from "./ShopReview";
import SingleComment from "./SingleComment";
import classes from "./SingleShop.module.scss";
const SingleShop = (props) => {
  const [shopData, setShopData] = useState({});
  const [showMap, setShowMap] = useState(false);
  const { id } = useParams();

  /**
   * 
   * @param {*} dateParser Функција која ги парсира (конвертира) објектите за според во содветен тип
   * @returns Враќа функција што се користи за сортирање на елементи
   */
  function createSorter(dateParser) {
    return function (a, b) {
      var aDate = dateParser(a.timestamp);
      var bDate = dateParser(b.timestamp);
      return bDate.getTime() - aDate.getTime();
    };
  }

  useEffect(() => {
    const loadShop = async () => {
      const data = await axios.get(`/shop/get/${id}`);
      data.data?.reviewList?.sort(createSorter(function (dateString) { // Функцијата која парсира стринг во датум
        return new Date(dateString);
      }));
      setShopData(data.data);
      setShowMap(true);
    };
    loadShop();
  }, []);

  const addReview = (data) => {
    setShopData({
      ...shopData,
      reviewList: [data, ...(shopData?.reviewList || [])]
    });
  }
  return (
    showMap ? <div className={classes.main}>
      <div className={classes.mydata} >
        <h1>{shopData.name}</h1>
        <div className={`${classes.submain}`}>
          <div>
            <Information label="Категорија:" value={shopData.category} />
            <Information label="Адреса:" value={shopData.address} />
            <Information
              label="Работно време:"
              value={shopData.opening_hours}
            />
          </div>
          <div >
            <Information label="E-mail:" value={shopData.email} />
            <Information label="Тел:" value={shopData.phone} />
            <Information label="Веб страна:" value={shopData.website} />
          </div>
        </div>
        <h2 style={{ marginLeft: '10px' }}>Мислење и оценки:</h2>
        <ShopReview shopId={id} onAddReview={addReview} />
        <div style={{ maxHeight: "500px", overflowY: "auto" }}>
          {shopData?.reviewList?.map((review, index) => <SingleComment key={review.username + index} {...review} />)}
        </div>
      </div>
      <div className={classes.mydata}>
        {showMap ? (
          <Map
            markers={[
              {
                ...shopData,
                position: {
                  lat: +shopData.lat,
                  lng: +shopData.lon,
                },
              },
            ]}

          />
        ) : (
          <LoadingComponent />
        )}
      </div>

    </div> : <LoadingComponent />
  );
};

export default SingleShop;
