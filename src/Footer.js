import React from "react";
import { Typography } from "@sprinklr/spaceweb/typography";
import { Box } from "@sprinklr/spaceweb/box";
import SocialIcon from "./SocialIcon";

const helpStyle = ["italic", { fontSize: "0.8rem" }];

const Footer = () => {
  return (
    <Box
      $as="footer"
      className="flex flex-col justify-center items-center spr-text-02"
    >
      <Typography className={helpStyle} variant="i4" $as="div" weight="regular">
        Need Help ? <a href="mailto:support@sprinklr.com">Support</a> is here
      </Typography>

      <SocialIcon />

      <Typography
        className={{ fontSize: "0.7rem" }}
        variant="i4"
        $as="div"
        weight="regular"
      >
        We process your information as described in our{" "}
        <a
          href="https://www.sprinklr.com/privacy/"
          target="_blank"
          rel="noreferrer"
        >
          Privacy Policy.
        </a>
      </Typography>

      <Typography
        className={["pb-2", { fontSize: "0.7rem" }]}
        variant="i4"
        $as="div"
        weight="regular"
      >
        &#169; Copyright 2022. All rights reserved
      </Typography>
    </Box>
  );
};

export default Footer;
