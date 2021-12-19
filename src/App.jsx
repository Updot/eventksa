import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Landing from "./containers/Landing";
import Form from "./containers/Form";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#132C70",
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
  return (
    <ThemeProvider theme={theme}>
      <Landing />
      <Form />
    </ThemeProvider>
  );
}

export default App;
