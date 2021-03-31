import React from "react";
import useInput from "hooks/useInput";
import styled from "styled-components";
import theme from "style/theme";

export default () => {
  const textHook = useInput("");

  
  return (
    <div style={{ textAlign: "center" }}>
      <Input {...textHook} placeholder="your text" style={{ fontSize: "40px", textAlign: "center" }} />
      <br />
      <p style={{ fontSize: "50px", marginTop: "3rem" }}>
        {textHook.value}
      </p>
    </div>
  );
};

const Input = styled.input`
  height: 70px;
  font-size: 40;
  text-align: center;
  color: ${theme.color.font};
  background-color: ${theme.color.background};
  border: 1px solid ${theme.color.font};
`
