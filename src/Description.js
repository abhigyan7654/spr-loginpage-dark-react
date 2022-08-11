import React from "react";
import { Typography } from "@sprinklr/spaceweb/typography";
import { Box } from "@sprinklr/spaceweb/box";
import { Button } from "@sprinklr/spaceweb/button";

const Description = () => {
  return (
    <Box
      className={[
        "box-border flex flex-col justify-evenly ",
        { height: "80%", paddingTop: "20%" },
      ]}
    >
      <Typography variant="h3" $as="div" weight="bold">
        Introducing the
        <br />
        Summer '22 release
      </Typography>

      <Typography variant="bs2" $as="div" weight="regular">
        Simple. Functional. Reliable.
      </Typography>

      <Typography variant="bs2" $as="div" weight="regular">
        Inspired by your feedback, our newest features are designed to help you
        achieve more and make your customers happier — with more efficient
        processes and effective outcomes – all from a unified platform.
      </Typography>

      <Typography variant="bs2" $as="div" weight="bold">
        Production Deployment Schedule
      </Typography>

      <ul>
        <li>
          <Typography variant="bs2" $as="div" weight="regular">
            Azure (Prod2 & Prod3) and GCP (Prod8) server instances:{" "}
            <strong>Aug 1-2, 2022</strong>
          </Typography>
        </li>

        <li>
          <Typography variant="bs2" $as="div" weight="regular">
            AWS (Prod & Prod4) server instances: <strong>Aug 6-7, 2022</strong>
          </Typography>
        </li>
      </ul>

      <Box className={["flex justify-between", { width: "80%" }]}>
        <Box className={{ width: "40%" }}>
          <Button
            $as="a"
            href="https://help.sprinklr.com/categories/summer-release-v1770-july/627cd43726a6af4952339a93"
            target="_blank"
            rel="noopener noreferrer"
            shape="pill"
            variant="primary"
            fullWidth
          >
            WHAT'S NEW
          </Button>
        </Box>

        <Box className={{ width: "50%" }}>
          <Button
            $as="a"
            href="https://sprinklruniversity.lyearn.com/path/62e2380f71d4dee23adbe6f1/details"
            target="_blank"
            rel="noopener noreferrer"
            shape="pill"
            variant="tertiary"
            fullWidth
          >
            TAKE THE COURSE
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Description;
