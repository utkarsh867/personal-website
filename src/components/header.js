import React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"
import profileImage from "../images/profile.jpg"
import GitHubIcon from "@material-ui/icons/GitHub"
import TwitterIcon from "@material-ui/icons/Twitter"
import Link from "@material-ui/core/Link"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  topHeaderLayout: {
    display: "grid",
    position: "fixed",
    width: "100%",
    gridTemplateColumns: "auto 1fr auto",
    backgroundColor: "#424242",
    alignItems: "center",
    zIndex: 1000,
  },
  nameText: {
    fontSize: 18,
  },
  profileImageContainer: {
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px 20px",
    width: "35px",
  },
  profileImgStyles: {
    width: "100%",
    borderRadius: "50%",
  },
  socialContainer: {
    display: "grid",
    gridTemplateColumns: "auto auto 1fr",
    gridGap: "10px",
    alignItems: "center",
  },
  socialIconsContainer: {
    margin: "0px 10px",
  },
  socialIcons: {
    color: "white",
    transition: "all 0.2s ease-in",
    transform: "scale(1)",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
}))

const Header = () => {
  const classes = useStyles()
  return (
    <header className={classes.topHeaderLayout}>
      <div className={classes.profileImageContainer}>
        <img
          className={classes.profileImgStyles}
          src={profileImage}
          alt={"Profile"}
        />
      </div>
      <div>
        <Typography className={classes.nameText} variant="h2">
          Utkarsh Goel
        </Typography>
      </div>
      <div className={classes.socialContainer}>
        <div className={classes.socialIconsContainer}>
          <Link href={"https://github.com/utkarsh867"}>
            <GitHubIcon className={classes.socialIcons} fontSize={"large"} />
          </Link>
        </div>
        <div className={classes.socialIconsContainer}>
          <Link href={"https://twitter.com/ug867"}>
            <TwitterIcon className={classes.socialIcons} fontSize={"large"} />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
