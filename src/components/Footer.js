import React from "react";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  footerContainer: {
    display: "grid",
    margin: "10px 0 0 0",
    padding: "5px 0",
    backgroundColor: "#000",
    width: "100%"
  },
  footerText: {
    color: "#fff"
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footerContainer}>
      <Container>
        <Typography className={classes.footerText}>
          Last updated: 20th March, 2020
        </Typography>
      </Container>
    </div>
  );
};

export default Footer;
