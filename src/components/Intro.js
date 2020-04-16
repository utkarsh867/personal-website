import React from "react"
import { Typography, makeStyles } from "@material-ui/core"
import Typist from "react-typist"

const useStyles = makeStyles(theme => ({
  introContainer: {
    display: "flex",
    height: "100%",
    padding: "10vh 2vw",
    alignItems: "center",
    color: "#d1d1d1",
  },
  text: {
    color: "#d1d1d1",
    fontSize: "2em",
  },
}))

export const Intro = () => {
  const classes = useStyles()
  return (
    <div className={classes.introContainer}>
      <Typography className={classes.text} variant="h2">
        <Typist
          cursor={{
            show: true,
            blink: true,
            element: "|",
            hideWhenDone: true,
            hideWhenDoneDelay: 200,
          }}
          startDelay={2000}
          avgTypingDelay={9}
        >
          <span>Name: Utkarsh Goel</span>
          <br />
          <span>
            <em>Engineer</em>
          </span>
          <br />
          <br />
          <span>Education: The University of Hong Kong</span>
          <Typist.Delay ms={500} />
          <br />
          <br />
          <br />
          <span>
            Working on things involving:
            <ul>
              <li>Web Application Development</li>
              <li>Mobile Application Development</li>
              <li>Computer Vision</li>
              <li>Machine Learning</li>
              <li>IoT and robotics</li>
            </ul>
          </span>
          <Typist.Delay ms={1000} />
          <br />
          <br />
          <span>Get in touch at: </span>
          <a href="mailto:contact@utkarshgoel.dev" style={{ color: "#d1d1d1" }}>
            contact@utkarshgoel.dev
          </a>
          <br />
          <br />
          <br />
          <span>
            Get to know about my work at:
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/utkarsh867/"
                  style={{ color: "#d1d1d1" }}
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/utkarsh867"
                  style={{ color: "#d1d1d1" }}
                >
                  GitHub
                </a>
              </li>
            </ul>
          </span>
          <br />
          <br />
          <br />
          <span>Scroll down for more</span>
        </Typist>
      </Typography>
    </div>
  )
}
