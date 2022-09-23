import { ChatRoomContainer, Container } from "./ChatRoom.styled";
import HeaderBar from "../ChatForm/HeaderBar/HeaderBar";
import InputBar from "../ChatForm/InputBar/InputBar";
import BodyBar from "../ChatForm/BodyBar/BodyBar";
import SideBar from "../SideBar/SideBar";
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
