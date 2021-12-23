import React from "react";
import { Collapse } from "@mui/material";
import Landing from "./Landing";
import Intro from "./Intro";
import Form from "./Form";

function Home({ isFormOpen, setIsFormOpen }) {
  return (
    <>
      <Landing />
      <Intro isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      <Collapse in={isFormOpen}>
        <Form />
      </Collapse>
    </>
  );
}

export default Home;
