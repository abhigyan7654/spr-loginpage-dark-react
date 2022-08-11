import React from "react";

import SprinklrTextClrIcon from "@sprinklr/spaceweb-icons/brand/SprinklrTextClr";

import { Box } from "@sprinklr/spaceweb/box";
import Footer from "./Footer.js";
import LoginPanel from "./LoginPanel.js";
import DarkButton from "./DarkButton.js";

const Login = ({ onStateChange }) => {
  return (
    <Box
      className={[
        "flex flex-col justify-between items-center",
        { height: "100vh" },
      ]}
    >
      <Box className={["flex flex-col items-center", { width: "90%" }]}>
        <DarkButton onClick={onStateChange} />
        <SprinklrTextClrIcon size={100} className={[{ marginTop: "10%" }]} />
        <LoginPanel />
      </Box>

      <Footer />
    </Box>
  );
};

export default Login;
