import React from "react";
import { Box } from "@sprinklr/spaceweb/box";

import TwitterCircleClrIcon from "@sprinklr/spaceweb-icons/brand/TwitterCircleClr";
import FacebookCircleClrIcon from "@sprinklr/spaceweb-icons/brand/FacebookCircleClr";
import LinkedinCircleClrIcon from "@sprinklr/spaceweb-icons/brand/LinkedinCircleClr";
import YoutubeCircleClrIcon from "@sprinklr/spaceweb-icons/brand/YoutubeCircleClr";
import CommunityCircleClrIcon from "@sprinklr/spaceweb-icons/brand/CommunityCircleClr";

const SocialLink = ({ link, Icon }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Icon className="m-1" />
    </a>
  );
};

const SocialIcon = () => {
  return (
    <Box className="flex justify-center">
      <SocialLink
        link="https://www.twitter.com/sprinklr"
        Icon={TwitterCircleClrIcon}
      />
      <SocialLink
        link="https://www.facebook.com/sprinklr"
        Icon={FacebookCircleClrIcon}
      />
      <SocialLink
        link="https://www.linkedin.com/company/sprinklr/mycompany/"
        Icon={LinkedinCircleClrIcon}
      />
      <SocialLink
        link="https://www.youtube.com/channel/UCTzl5zxRNZndPCsoWpPKtqw"
        Icon={YoutubeCircleClrIcon}
      />
      <SocialLink
        link="https://community.sprinklr.com/"
        Icon={CommunityCircleClrIcon}
      />
    </Box>
  );
};

export default SocialIcon;
