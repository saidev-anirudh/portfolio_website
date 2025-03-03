import { Container } from "@mui/material";
import AnimatedWelcome from "./AnimatedWelcome";
import NavigationBar from "./NavigationBar";
import "./App.css";
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "2%",
        height: "115vh",
        marginBottom: "2%",
      }}
      className="App"
    >
      <NavigationBar />
      <AnimatedWelcome />
    </Container>
  );
}

export default App;
