import React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Paper from "@material-ui/core/Paper"
import ButtonBase from "@material-ui/core/ButtonBase"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  container: {
    display: "grid",
    width: "100%",
    gridTemplateColumns: "1fr 7fr",
    borderRadius: "20px",
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "2fr 6fr",
    },
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr 3fr",
    },
  },
  buttonbase: {
    width: "100%",
    backgroundColor: theme.palette.background.default,
    margin: "10px 0",
    borderRadius: "20px",
  },
  image: {
    width: "100%",
    borderRadius: "20px",
  },
  heading: {
    fontWeight: 800,
    color: "white",
    margin: "0 0 10px 0",
  },
  subheading: {
    fontWeight: 400,
    color: "white",
  },
  text: {
    color: "white",
    margin: "10px 0 0 0",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  textSection: {
    textAlign: "left",
    padding: "30px 30px",
    [theme.breakpoints.down("xs")]: {
      padding: "10px 15px",
    },
  },
}))

export const WorkCard = ({ title, subtitle, text, link, image }) => {
  const classes = useStyles()
  return (
    <ButtonBase
      className={classes.buttonbase}
      onClick={() => (link === "" ? null : window.location.assign(link))}
    >
      <Paper className={classes.container} elevation={0}>
        <div>
          <img className={classes.image} src={image} alt={title} />
        </div>
        <div className={classes.textSection}>
          <Typography variant="h3" className={classes.heading}>
            {title}
          </Typography>
          <Typography variant="h4" className={classes.subheading}>
            {subtitle}
          </Typography>
          <Typography variant="body1" className={classes.text}>
            {text}
          </Typography>
        </div>
      </Paper>
    </ButtonBase>
  )
}
