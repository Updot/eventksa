import React, { useState } from "react";
import { Button, Collapse } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Landing from "./containers/Landing";
import Intro from "./containers/Intro";
import Form from "./containers/Form";
import Footer from "./containers/Footer";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#132C70",
        dark: "#0C1B54",
        darker: "#0A1644",
      },
      orange: {
        main: "#F3C8A6",
      },
      grey: {
        light: "#FAFAFA",
        main: "#D4D4D4",
        dark: "#858586",
      },
    },
    typography: {
      fontFamily: "Alef, sans-serif",
    },
  });

  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Landing />
      <Intro isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      <Collapse in={isFormOpen}>
        <Form />
      </Collapse>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
