import React from "react";
import useStyle from "@sprinklr/spaceweb/style/useStyle";

import { FormControl } from "@sprinklr/spaceweb/form-control";
import { Input } from "@sprinklr/spaceweb/input";
import { Button } from "@sprinklr/spaceweb/button";
import { Box } from "@sprinklr/spaceweb/box";
import { Typography } from "@sprinklr/spaceweb/typography";

const tester =
  /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
const validateEmail = function (email) {
  if (!email) return false;

  if (email.length > 256) return false;

  if (!tester.test(email)) return false;

  const [account, address] = email.split("@");
  if (account.length > 64) return false;

  const domainParts = address.split(".");
  if (
    domainParts.some(function (part) {
      return part.length > 63;
    })
  )
    return false;

  return true;
};

const EmailPanel = ({
  value,
  isValid,
  isVisited,
  setValue,
  setIsValid,
  setIsVisited,
  onClick,
}) => {
  const { css } = useStyle();

  const shouldShowError = !isValid && isVisited;
  const onChange = (event) => {
    const { value: inputValue } = event.currentTarget;

    setIsValid(validateEmail(inputValue));
    setValue(inputValue);
    if (!inputValue) setIsVisited(false);
  };

  return (
    <Box className={[{ width: "90%" }]}>
      <form
        className={css(["flex flex-col"])}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <FormControl
          label="Email"
          intent={shouldShowError ? "error" : undefined}
          caption={
            shouldShowError
              ? () => (
                  <Typography
                    variant="i4"
                    className={{ fontSize: "0.8rem" }}
                    weight="regular"
                  >
                    Oops! you entered an incorrect email address.
                  </Typography>
                )
              : null
          }
        >
          <Input
            id="input-id"
            variant="line"
            size="lg"
            value={value}
            onChange={onChange}
            onBlur={() => {
              if (value) setIsVisited(true);
            }}
            overrides={{}}
            type="email"
            placeholder="Enter Email"
            autoComplete="off"
          />
        </FormControl>
        <Button
          className={"self-center"}
          type="submit"
          disabled={!isValid}
          onClick={onClick}
        >
          Next
        </Button>
      </form>
    </Box>
  );
};

export default EmailPanel;
