import React from "react"
import { Typography, makeStyles } from "@material-ui/core"
import profileImage from "../images/profile.jpg"
import GitHubIcon from "@material-ui/icons/GitHub"
import TwitterIcon from "@material-ui/icons/Twitter"
import Link from "@material-ui/core/Link"
import MailIcon from "@material-ui/icons/Mail"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import { useSpring, animated } from "react-spring"

const useStyles = makeStyles(theme => ({
  introContainer: {
    display: "flex",
    height: "100%",
    minHeight: "540px",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    display: "grid",
    width: "100%",
    gridTemplateColumns: "1fr",
    justifyContent: "center",
    justifyItems: "center",
    textAlign: "center",
  },
  text: {
    color: "#d1d1d1",
    padding: "10px 0",
  },
  profileImageContainer: {
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
    [theme.breakpoints.up("sm")]: {
      width: "70%",
    },
  },
  profileImgStyles: {
    width: "100%",
    borderRadius: "50%",
  },
  socialContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px",
    height: "100px",
  },
  socialIcons: {
    color: "white",
    transition: "all 0.2s ease-in",
    margin: 10,
    fontSize: theme.typography.h1.fontSize,
    transform: "scale(1)",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
}))

export const Intro = () => {
  const classes = useStyles()
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0.05 },
    config: { duration: 600 },
    delay: 500,
  })

  return (
    <div className={classes.introContainer}>
      <animated.div className={classes.innerContainer} style={fadeIn}>
        <div className={classes.profileImageContainer}>
          <img
            className={classes.profileImgStyles}
            src={profileImage}
            alt={"Profile"}
          />
        </div>
        <Typography className={classes.text} variant="h2">
          Utkarsh Goel
        </Typography>
        <Typography variant="h4">Engineer, Software Developer</Typography>
        <div className={classes.socialContainer}>
          <Link href={"https://github.com/utkarsh867"}>
            <GitHubIcon className={classes.socialIcons} />
          </Link>
          <Link href={"https://www.linkedin.com/in/utkarsh867/"}>
            <LinkedInIcon className={classes.socialIcons} />
          </Link>
          <Link href={"https://twitter.com/ug867"}>
            <TwitterIcon className={classes.socialIcons} />
          </Link>
          <Link href={"mailto:contact@utkarshgoel.dev"}>
            <MailIcon className={classes.socialIcons}></MailIcon>
          </Link>
        </div>
      </animated.div>
    </div>
  )
}
