/* eslint-disable */

import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import photo from "../../assets/supermarket.jpg"
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "0.8rem",
        width: "100%",
        border: "1px solid black",
        maxWidth: "93%",
        backgroundColor: '#CFFFF6',
        boxShadow: "rgba(0, 0, 0, 0.3) 0px 5px 20px, rgba(0, 0, 0, 0.22) 0px 2px 2px",
        "&:hover": {
            boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
            opacity: 1,
            transition: '0.5s',
            cursor: 'pointer',
            // backgroundColor: 'lightgreen'
            background: "linear-gradient(transparent, #00C6FF)"
        },
    },
    inline: {
        display: "inline"
    },
    titleName: {
        fontWeight: "bold",
        fontSize: "2rem"
    },
    addresStyle: {
        fontSize: "1rem"
    },
    kmAway: {
        fontSize: '2rem'
    }
}));

const Place = (props) => {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar >
                    <Avatar
                        alt="Remy Sharp"
                        src={photo}
                    />
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <span className={classes.titleName}>
                            {props.name}
                        </span>
                    }
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body1"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                {props.category}
                            </Typography>
                            <br />
                            <span className={classes.addresStyle}>
                                {props.address}
                            </span>
                        </React.Fragment>
                    }
                />
                <ListItemAvatar >
                    <ListItemText secondary={
                        <React.Fragment>
                            <span className={classes.kmAway}>
                                15 km
                            </span>
                        </React.Fragment>
                    } />
                </ListItemAvatar>
            </ListItem>
        </List>
    );
};

export default Place;
