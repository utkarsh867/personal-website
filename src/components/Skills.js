import React from "react"
import { Typography, makeStyles } from "@material-ui/core"
import django from "../images/logos/django.svg"
import nodejs from "../images/logos/nodejs.svg"
import reactjs from "../images/logos/react.svg"
import kotlin from "../images/logos/kotlin.svg"
import flutter from "../images/logos/flutter.svg"
import androidstudio from "../images/logos/androidstudio.svg"
import docker from "../images/logos/docker.svg"
import kubernets from "../images/logos/kubernets.svg"
import travis from "../images/logos/travis.svg"

const useStyles = makeStyles(theme => ({
  headerText: {
    color: "white",
  },
  headerSubText: {
    color: "white",
  },
  container: {
    margin: "20px 0 20px 0",
    padding: "0 2vw",
  },
  heading: {
    color: "#d1d1d1",
  },
  skillGroup: {
    margin: "20px 0",
    display: "grid",
    gridTemplateColumns: "auto",
    gridTemplateRows: "auto 1fr",
  },
  skillGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridAutoRows: "1fr",
    gridGap: "1vw",
    alignItems: "center",
    margin: "20px 0",
  },
  skillLogoContainer: {
    display: "flex",
    width: "100%",
    height: "100%",
    alignItems: "center",
    borderRadius: "10%",
    padding: 10,
    backgroundColor: "#303030",
  },
  logo: {
    width: "100%",
  },
  layout: {
    display: "grid",
    gridTemplateColumns: "1fr  1fr 1fr",
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr 1fr",
    },
    gridGap: "3vw",
  },
}))

export const Skills = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Typography className={classes.heading} variant="h2">
        Developer Skills
      </Typography>
      <div className={classes.layout}>
        <div className={classes.skillGroup}>
          <Typography variant="h3">Fullstack</Typography>
          <div className={classes.skillGrid}>
            {[reactjs, nodejs, django, kotlin].map((item, index) => (
              <div key={index} className={classes.skillLogoContainer}>
                <img className={classes.logo} alt="" src={item}></img>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.skillGroup}>
          <Typography variant="h3">Application</Typography>
          <div className={classes.skillGrid}>
            {[androidstudio, reactjs, flutter].map((item, index) => (
              <div key={index} className={classes.skillLogoContainer}>
                <img className={classes.logo} alt="" src={item}></img>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.skillGroup}>
          <Typography variant="h3">DevOps</Typography>
          <div className={classes.skillGrid}>
            {[docker, kubernets, travis].map((item, index) => (
              <div key={index} className={classes.skillLogoContainer}>
                <img className={classes.logo} alt="" src={item}></img>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
