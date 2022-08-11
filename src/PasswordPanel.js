import React, { useState } from "react";
import useStyle from "@sprinklr/spaceweb/style/useStyle";

import { FormControl } from "@sprinklr/spaceweb/form-control";
import { Input } from "@sprinklr/spaceweb/input";
import { Button } from "@sprinklr/spaceweb/button";
import { Box } from "@sprinklr/spaceweb/box";
import { Typography } from "@sprinklr/spaceweb/typography";
import { IconTextButton } from "@sprinklr/spaceweb/button";
import PointerLeftIcon from "@sprinklr/spaceweb-icons/solid/PointerLeft";

import DefaultAvatarClrIcon from "@sprinklr/spaceweb-icons/solid/DefaultAvatarClr";

const PasswordPanel = ({ email, onClick }) => {
  const [password, setPassword] = useState("");

  const onChange = (event) => {
    const { value: inputValue } = event.currentTarget;
    setPassword(inputValue);
  };

  const { css } = useStyle();

  return (
    <Box className={[{ width: "90%" }]}>
      <Box>
        <IconTextButton
          className={"pl-0 pb-2"}
          icon={PointerLeftIcon}
          size="xs"
          variant="bulk"
          onClick={onClick}
        >
          Back
        </IconTextButton>
      </Box>

      <Box className={"flex pb-3"}>
        <DefaultAvatarClrIcon size={20} />
        <Typography
          className={"spr-text-02 text-left ml-3"}
          variant="i3"
          weight="regular"
        >
          {email}
        </Typography>
      </Box>

      <form
        className={css(["flex flex-col"])}
        onSubmit={(e) => e.preventDefault()}
      >
        <FormControl label="Password">
          <Input
            id="input-password"
            variant="line"
            size="lg"
            value={password}
            onChange={onChange}
            type="password"
            placeholder="Enter Password"
          />
        </FormControl>

        <Button
          className="self-center"
          type="submit"
          disabled={password ? false : true}
          onClick={() => {
            alert(`Login Successful ${email}!`);
          }}
        >
          Log in
        </Button>
      </form>
    </Box>
  );
};

export default PasswordPanel;
