import React, { useEffect, useRef, useState } from 'react'
import classes from "./Login.module.scss";
import photoImage from '../../assets/MacedoniaMap.png'
import { default as axios } from '../../axiosConfig';
import { Navigate } from "react-router";

const Login = () => {
    const userRef = useRef();
    const passRef = useRef();
    const [redirectToAdmin, setRedirectToAdmin] = useState(false);
    const loginHandler = async () => {
        const res = await axios.post("/login", {
            username: userRef.current.value,
            password: passRef.current.value
        });
        if (res.data === "ACCEPTED") {
            var expires = (new Date(Date.now() + 20 * 60 * 1000)).toLocaleString("sv-SE").replace(" ", "T").split(".")[0];
            document.cookie = (`loginToken=${userRef.current.value}###${expires}; expires=` + expires) + ";path=/;"
            setRedirectToAdmin(true);
        }
    }
    useEffect(() => {
        const effect = async () => {
            const res = await axios.get("/login/isLoggedIn");
            if (res.data !== "307 TEMPORARY_REDIRECT") {
                setRedirectToAdmin(true);
            }
        }
        effect();
    }, [])
    if (redirectToAdmin) {
        return <Navigate to="/admin" />
    }
    return (
        <div >
            {<img src={photoImage} className={classes.imgBackground} />}
            <div className={classes["login-box"]}>
                <h2>Login</h2>
                <form>
                    <div className={classes["user-box"]}>
                        <input type="text" name="" required="" ref={userRef} />
                        <label>Корисничко име</label>
                    </div>
                    <div className={classes["user-box"]}>
                        <input type="password" name="" required="" ref={passRef} />
                        <label>Лозинка</label>
                    </div>
                    <a href="#" onClick={loginHandler}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Најави се
                    </a>
                </form>
            </div>
        </div>
    )
}

export default Login
