import React, { useEffect, useRef, useState } from "react";
import { ChatRoomContainer, Container } from "./ChatRoom.styled";
import { InputBar, HeaderBar, BodyBar, SideBar } from "@components";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import { useSelector } from "react-redux";

const ChatRoom = () => {
  const [publicChats, setPublicChats] = useState([]);
  const [usersJoin, setUsersJoin] = useState([
    {
      userName: "",
      imgUrl: "",
      roles: [],
    },
  ]);
  const user = useSelector((state) => state.user);
  const stompClient = useRef(null);

  const onConnected = () => {
    stompClient.current.subscribe("/chatroom/public", onMessageReceived);

    stompClient.current.send(
      "/joinroom",
      {},
      JSON.stringify({
        sender: user,
        date: new Date(Date.now()),
        status: "JOIN",
      })
    );
  };

  const onMessageReceived = (payload) => {
    var payloadData = JSON.parse(payload.body);
    console.log(payloadData);
    switch (payloadData.status) {
      case "JOIN":
        /* setUsersJoin([...usersJoin]); */
        break;
      case "MESSAGE":
        break;
    }
  };

  const onError = () => {};

  useEffect(() => {
    if (user) {
      const socket = new SockJS(`${process.env.REACT_APP_ENDPOINT_SERVER}/ws`);
      stompClient.current = over(socket);
      stompClient.current.connect({}, onConnected, onError);
    }
  }, [user]);

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
