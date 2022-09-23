import { ChatRoomContainer } from "./ChatRoom.styled";
import HeaderBar from "../ChatForm/HeaderBar/HeaderBar";
import InputBar from "../ChatForm/InputBar/InputBar";
import BodyBar from "../ChatForm/BodyBar/BodyBar";
const ChatRoom = () => {
  return (
    <ChatRoomContainer>
      <HeaderBar />
      <BodyBar />
      <InputBar />
    </ChatRoomContainer>
  );
};

export default ChatRoom;
