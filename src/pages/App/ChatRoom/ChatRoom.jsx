import { ChatRoomContainer, Container } from "./ChatRoom.styled";
import HeaderBar from "@components/Chat/ChatForm/HeaderBar/HeaderBar";
import InputBar from "@components/Chat/ChatForm/InputBar/InputBar";
import BodyBar from "@components/Chat/ChatForm/BodyBar/BodyBar";
import SideBar from "@components/Chat/SideBar/SideBar";

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
