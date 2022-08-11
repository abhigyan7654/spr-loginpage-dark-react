import React, { useEffect, useState } from "react";

import SpacewebProvider from "@sprinklr/spaceweb/spacewebProvider";

import "@sprinklr/spaceweb-themes/utilities.min.css";
import "@sprinklr/spaceweb-themes/hyperspace/themeVars.min.css";

import sprLight from "@sprinklr/spaceweb-themes/hyperspace/light";
import sprDark from "@sprinklr/spaceweb-themes/hyperspace/dark";
import { Grid, Col } from "@sprinklr/spaceweb/grid";
import Login from "./Login.js";
import SidePage from "./Sidepage.js";

const App = () => {
  const [state, setState] = useState({
    theme: "light",
  });

  const onStateChange = () => {
    setState({ theme: state.theme === "dark" ? "light" : "dark" });
  };

  useEffect(() => {
    document.title = "Sprinklr/ Log in";
  }, []);

  return (
    <SpacewebProvider
      direction={"ltr"}
      theme={state.theme === "light" ? sprLight : sprDark}
    >
      <Grid
        cols={3}
        gap={0}
        colGap={0}
        style={{ height: "100vh", overflow: "hidden" }}
      >
        <Col colSpan={2}>
          <SidePage state={state} />
        </Col>

        <Col>
          <Login onStateChange={onStateChange} />
        </Col>
      </Grid>
    </SpacewebProvider>
  );
};

export default App;
