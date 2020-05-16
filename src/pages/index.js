import React from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import createMuiTheme from "@material-ui/core/styles/createMuiTheme"
import responsiveFontSizes from "@material-ui/core/styles/responsiveFontSizes"
import { ParallaxProvider } from "react-scroll-parallax"
import { makeStyles } from "@material-ui/core"
import Container from "@material-ui/core/Container"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CssBaseline from "@material-ui/core/CssBaseline"
import Header from "../components/Header"
import { Intro } from "../components/Intro"
import Projects from "../components/Projects"
import { Skills } from "../components/Skills"
import { Work } from "../components/Work"

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#3f50b5",
        dark: "#002884",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
      background: {
        default: "#212121",
      },
    },
    typography: {
      fontSize: 8,
      h1: {
        fontFamily: "JetBrains Mono, monospace",
        fontWeight: "bold",
        color: "#d1d1d1",
      },
      h2: {
        fontFamily: "JetBrains Mono, monospace",
        color: "white",
      },
      h3: {
        fontFamily: "Roboto, sans-serif",
        fontWeight: "100",
        padding: "0 0 10px 0",
        color: "#FAFAFA",
      },
      h4: {
        fontFamily: "Roboto, sans-serif",
        color: "#d1d1d1",
      },
      body1: {
        fontFamily: "Roboto, sans-serif",
        fontWeight: 300,
        fontSize: "1.01em",
      },
      body2: {
        fontFamily: "Roboto, sans-serif",
        fontWeight: 300,
      },
    },
  })
)

const useStyles = makeStyles(theme => ({
  App: {
    height: "100%",
  },
  appContainer: {
    height: "100vh",
  },
}))

const IndexPage = () => {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <ParallaxProvider>
        <Layout>
          <SEO title="Home" />
          <CssBaseline />
          <Container maxWidth="sm" className={classes.appContainer}>
            <Intro />
          </Container>
          <Container>
            <Projects />
            <Work />
            <Skills />
          </Container>
        </Layout>
      </ParallaxProvider>
    </ThemeProvider>
  )
}

export default IndexPage
