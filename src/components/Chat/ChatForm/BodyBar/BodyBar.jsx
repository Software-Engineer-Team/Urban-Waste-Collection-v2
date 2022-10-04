import React from "react";
import { BodyContainer, BodyContent } from "./BodyBar.styled";
import Message from "./Message";
const BodyBar = () => {
  return (
    <BodyContainer>
      <BodyContent>
        <Message type="left" text="Hello World!!"></Message>
        <Message type="right" text="Hello World!!"></Message>
      </BodyContent>
    </BodyContainer>
  );
};

export default BodyBar;
