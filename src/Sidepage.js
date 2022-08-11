import React from "react";
import { Box } from "@sprinklr/spaceweb/box";
import Description from "./Description";

import { Grid, Col } from "@sprinklr/spaceweb/grid";

const SidePage = ({ state }) => {
  const filterBackground = state.theme === "dark" ? "invert(100%)" : undefined;

  const backgroundStyle = [
    {
      backgroundImage:
        "url(https://images.ctfassets.net/ukazlt65o6hl/4hX08ZFycoo2yFRhw1YYlx/2d01dd918865b757e1f1306cb42689c4/17.7-product-release_login-page_bg-img.png)",
      filter: `${filterBackground}`,
      height: "100%",
      width: "100%",
      backgroundSize: "cover",
      boxSizing: "border-box",
      padding: "5rem",
    },
    "bg-center",
  ];

  return (
    <Grid cols={2} gap={4} className={backgroundStyle}>
      <Col className={[{ filter: `${filterBackground}` }]}>
        <Description />
      </Col>

      <Col className={[{ filter: `${filterBackground}` }]}>
        <Box
          className={[
            "flex-col items-center",
            {
              paddingTop: "50%",
              height: "100%",
              width: "100%",
              overflow: "hidden",
            },
          ]}
        >
          <iframe
            src="https://player.vimeo.com/video/732467718?h=b48c7ed4f2&amp;title=0&amp;byline=0&amp;portrait=0&amp;playsinline=0&amp;autopause=0&amp;app_id=122963"
            width="100%"
            height="33%"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen=""
            title="17.7 Teaser.mp4"
            data-ready="true"
          ></iframe>
        </Box>
      </Col>
    </Grid>
  );
};

export default SidePage;
