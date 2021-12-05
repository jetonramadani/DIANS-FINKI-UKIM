/* eslint-disable */
import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import classes from "./StoreContainer.module.scss";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const MultipleCheckboxes = ({onChange, label, value, listValue}) => {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={listValue}
      disableCloseOnSelect
      // filterOptions={}
      limitTags={1}
      onChange={onChange}
      value={value}
      renderOption={(option, {selected}) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{marginRight: 8}}
            checked={selected}
          />
          {option}
        </React.Fragment>
      )}
      className={classes.checkBoxStyle}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label={label} /*placeholder="All cities" */
        />
      )}
    />
  );
};

const top100Films = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Godfather: Part II",
  "The Dark Knight",
  "12 Angry Men",
  //   {title: "Schindler's List"},
  //   {title: "Pulp Fiction"},
  //   {title: "The Lord of the Rings: The Return of the King"},
  //   {title: "The Good, the Bad and the Ugly"},
  //   {title: "Fight Club"},
  //   {title: "The Lord of the Rings: The Fellowship of the Ring"},
  //   {title: "Star Wars: Episode V - The Empire Strikes Back"},
  //   {title: "Forrest Gump"},
  //   {title: "Inception"},
  //   {title: "The Lord of the Rings: The Two Towers"},
  //   {title: "One Flew Over the Cuckoo's Nest"},
  //   {title: "Goodfellas"},
  //   {title: "The Matrix"},
  //   {title: "Seven Samurai"},
  //   {title: "Star Wars: Episode IV - A New Hope"},
  //   {title: "City of God"},
  //   {title: "Se7en"},
  //   {title: "The Silence of the Lambs"},
  //   {title: "It's a Wonderful Life"},
  //   {title: "Life Is Beautiful"},
  //   {title: "The Usual Suspects"},
  //   {title: "Léon: The Professional"},
  //   {title: "Spirited Away"},
  //   {title: "Saving Private Ryan"},
  //   {title: "Once Upon a Time in the West"},
  //   {title: "American History X"},
  //   {title: "Interstellar"},
];

export default MultipleCheckboxes;
