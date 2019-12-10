import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container>
        <Header />
        <Projects />
        <Skills />
      </Container>
    </div>
  );
}

export default App;
