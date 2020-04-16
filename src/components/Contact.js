import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MailIcon from "@material-ui/icons/Mail";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles(theme => ({
  container: {
    margin: "30px 0 20vh 0"
  },
  mailIcon: {
    color: "#d1d1d1",
    fontSize: 120,
    margin: "0 20px"
  },
  elementContainer: {
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "1fr auto auto 1fr"
  },
  buttonbase: {
    width: "100%",
    margin: "40px 0"
  }
}));

export const Contact = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h1">Contact Me</Typography>
      <ButtonBase
        className={classes.buttonbase}
        onClick={() =>
          window.location.assign(
            "mailto:ugoel@connect.hku.hk?Subject=Reaching%20out%20from%20the%20website%20link%20|"
          )
        }
      >
        <div className={classes.elementContainer}>
          <div></div>
          <MailIcon className={classes.mailIcon} fontSize={"large"}></MailIcon>
          <Typography variant="h2">Email</Typography>
          <div></div>
        </div>
      </ButtonBase>
    </div>
  );
};
