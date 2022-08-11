import React from "react";

import { IconButton } from "@sprinklr/spaceweb/button";
import LightBulbIcon from "@sprinklr/spaceweb-icons/solid/LightBulb";
import { Box } from "@sprinklr/spaceweb/box";

const DarkButton = ({ onClick }) => {
  return (
    <Box className="self-end fixed">
      <IconButton shape={"round"} size="sm" onClick={onClick}>
        <LightBulbIcon />
      </IconButton>
    </Box>
  );
};

export default DarkButton;
