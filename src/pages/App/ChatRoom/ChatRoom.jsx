import React, { useCallback, useEffect, useRef, useState } from "react";
import { ChatRoomContainer, Container } from "./ChatRoom.styled";
import { InputBar, HeaderBar, BodyBar, SideBar } from "@components/index";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import { useSelector } from "react-redux";

const ChatRoom = () => {
  const [usersJoin, setUsersJoin] = useState([]);
  const [messages, setMessages] = useState([]);
  const user = useSelector((state) => state.user);
  const stompClient = useRef(null);

  const onMessageReceived = useCallback((payload) => {
    const { sender, message, date } = JSON.parse(payload.body);
    setMessages((preMes) => [...preMes, { sender, message, date }]);
  }, []);

  const onJoinRoom = useCallback((payload) => {
    const users = JSON.parse(payload.body);
    setUsersJoin(users);
  }, []);

  const onConnected = async () => {
    stompClient.current.subscribe("/chatroom/public", onMessageReceived);

    stompClient.current.subscribe("/chatroom/public/joinroom", onJoinRoom);

    stompClient.current.subscribe("/chatroom/leaveroom", (payload) => {
      const remainUsers = JSON.parse(payload.body);
      setUsersJoin(remainUsers);
    });

    stompClient.current.send(
      "/app/joinroom",
      {},
      JSON.stringify({
        sender: user,
        date: new Date(Date.now()),
      })
    );
  };

  useEffect(() => {
    const socket = new SockJS(`${process.env.REACT_APP_ENDPOINT_SERVER}/ws`);
    stompClient.current = over(socket);
    stompClient.current.connect({}, onConnected);

    return () => {
      stompClient.current.send("/app/leaveroom", {}, JSON.stringify(user));
      stompClient.current.disconnect();
    };
  }, []);

  const handleMessage = (message) => {
    stompClient.current.send(
      "/app/message",
      {},
      JSON.stringify({
        sender: user,
        message,
        date: new Date(Date.now()),
      })
    );
  };

  return (
    <Container>
      <SideBar usersJoin={usersJoin} />
      <ChatRoomContainer>
        <HeaderBar />
        <BodyBar messages={messages} />
        <InputBar handleMessage={handleMessage} />
      </ChatRoomContainer>
    </Container>
  );
};

export default ChatRoom;
