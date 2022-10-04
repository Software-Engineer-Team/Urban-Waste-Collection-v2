import React from "react";
import { ChatRoomContainer, Container } from "./ChatRoom.styled";
import { InputBar, HeaderBar, BodyBar, SideBar } from "@components";

const ChatRoom = () => {
  return (
    <Container>
      <SideBar />
      <ChatRoomContainer>
        <HeaderBar />
        <BodyBar />
        <InputBar />
      </ChatRoomContainer>
    </Container>
  );
};

export default ChatRoom;
