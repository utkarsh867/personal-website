import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  sectionTitle: {
    color: "#ffab40",
    fontWeight: 800,
    margin: "32px 0 32px 0"
  }
}));

const Skills = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h3" className={classes.sectionTitle}>
        Skills
      </Typography>
    </>
  );
};

export default Skills;
