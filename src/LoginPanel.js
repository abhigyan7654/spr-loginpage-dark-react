import React, { useState } from "react";
import EmailPanel from "./EmailPanel";
import PasswordPanel from "./PasswordPanel";

const LoginPanel = () => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isVisited, setIsVisited] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const onClick = () => {
    setIsPassword(!isPassword);
  };

  if (isPassword) return <PasswordPanel email={value} onClick={onClick} />;
  else
    return (
      <EmailPanel
        value={value}
        isValid={isValid}
        isVisited={isVisited}
        onClick={onClick}
        setValue={setValue}
        setIsValid={setIsValid}
        setIsVisited={setIsVisited}
      />
    );
};

export default LoginPanel;
