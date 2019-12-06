import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./components/Header";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
        <CssBaseline/>
      <Container>
          <Header />
          <Projects/>
      </Container>
    </div>
  );
}

export default App;
