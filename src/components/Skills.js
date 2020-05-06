import React from "react"
import { Typography, makeStyles } from "@material-ui/core"
import { Parallax } from "rc-scroll-anim"
import django from "../images/logos/django.svg"
import nodejs from "../images/logos/nodejs.svg"
import reactjs from "../images/logos/react.svg"
import kotlin from "../images/logos/kotlin.svg"
import flutter from "../images/logos/flutter.svg"
import androidstudio from "../images/logos/androidstudio.svg"
import docker from "../images/logos/docker.svg"
import kubernets from "../images/logos/kubernets.svg"

const useStyles = makeStyles(theme => ({
  headerText: {
    color: "white",
  },
  headerSubText: {
    color: "white",
  },
  container: {
    margin: "20px 0 20vh 0",
    padding: "0 2vw",
  },
  heading: {
    color: "#d1d1d1",
  },
  skillGroup: {
    margin: "20px 0",
    display: "grid",
    gridTemplateColumns: "auto",
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
      <Parallax
        animation={{ y: 0, opacity: 1, playScale: [0.1, 0.5] }}
        style={{ transform: "translateY(100px)", opacity: 0 }}
      >
        <Typography className={classes.heading} variant="h1">
          Skills
        </Typography>
      </Parallax>
      <div className={classes.layout}>
        <div className={classes.skillGroup}>
          <Parallax
            animation={{ y: 0, opacity: 1, playScale: [0.1, 0.5] }}
            style={{ transform: "translateY(100px)", opacity: 0 }}
          >
            <Typography variant="h2">Fullstack</Typography>
            <div className={classes.skillGrid}>
              {[reactjs, nodejs, django, kotlin].map((item, index) => (
                <div key={index} className={classes.skillLogoContainer}>
                  <img className={classes.logo} alt="" src={item}></img>
                </div>
              ))}
            </div>
          </Parallax>
        </div>
        <div className={classes.skillGroup}>
          <Parallax
            animation={{ y: 0, opacity: 1, playScale: [0.1, 0.5] }}
            style={{ transform: "translatey(100px)", opacity: 0 }}
          >
            <Typography variant="h2">Application</Typography>
            <div className={classes.skillGrid}>
              {[androidstudio, reactjs, flutter].map((item, index) => (
                <div key={index} className={classes.skillLogoContainer}>
                  <img className={classes.logo} alt="" src={item}></img>
                </div>
              ))}
            </div>
          </Parallax>
        </div>
        <div className={classes.skillGroup}>
          <Parallax
            animation={{ y: 0, opacity: 1, playScale: [0.1, 0.5] }}
            style={{ transform: "translateY(100px)", opacity: 0 }}
          >
            <Typography variant="h2">DevOps</Typography>
            <div className={classes.skillGrid}>
              {[docker, kubernets].map((item, index) => (
                <div key={index} className={classes.skillLogoContainer}>
                  <img className={classes.logo} alt="" src={item}></img>
                </div>
              ))}
            </div>
          </Parallax>
        </div>
      </div>
    </div>
  )
}
