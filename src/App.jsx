import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Form from "./containers/Form";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#132C70",
      },
      secondary: {
        main: "#F3C8A6",
      },
      grey: {
        main: "#858586",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Form />
    </ThemeProvider>
  );
}

export default App;
