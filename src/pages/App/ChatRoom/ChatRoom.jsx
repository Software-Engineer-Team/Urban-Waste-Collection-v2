import React, { useCallback, useEffect, useRef, useState } from "react";
import { ChatRoomContainer, Container } from "./ChatRoom.styled";
import { InputBar, HeaderBar, BodyBar, SideBar } from "@components/index";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import { useSelector } from "react-redux";

const ChatRoom = () => {
  const [usersJoin, setUsersJoin] = useState([
    {
      name: "kietcao",
      imgUrl: "/images/member/member-1.jpg",
      roles: [],
    },
  ]);
  const [messages, setMessages] = useState([
    {
      sender: {
        name: "",
        imgUrl: "/images/member/member-1.jpg",
      },
      date: new Date(Date.now()),
      message: "Hello World",
    },
  ]);
  const user = useSelector((state) => state.user);
  const stompClient = useRef(null);

  const onMessageReceived = useCallback(
    (payload) => {
      console.log(JSON.parse(payload.body));
      const { status, sender, message, date } = JSON.parse(payload.body);
      console.log(sender, status);
      switch (status) {
        case "JOIN":
          console.log(sender.name, user.name);
          if (sender.name !== user.name) {
            setUsersJoin([
              ...usersJoin,
              { name: sender.name, imgUrl: sender.imgUrl, roles: sender.roles },
            ]);
          }
          break;
        case "MESSAGE":
          setMessages((preMes) => [...preMes, { sender, message, date }]);
          break;
        default:
          break;
      }
    },
    [usersJoin, user]
  );

  useEffect(() => {
    if (stompClient.current) {
      const { id } = stompClient.current.subscribe(
        "/chatroom/public",
        onMessageReceived
      );

      return () => {
        stompClient.current.unsubscribe(id);
      };
    }
  }, [stompClient.current, onMessageReceived]);

  useEffect(() => {
    if (stompClient.current) {
      const { id } = stompClient.current.subscribe(
        "/chatroom/users-in-room",
        (payload) => {
          const usersJoinRoom = JSON.parse(payload.body);
          console.log(usersJoinRoom);
          setUsersJoin(usersJoinRoom);
        }
      );

      return () => {
        stompClient.current.unsubscribe(id);
      };
    }
  }, [stompClient.current]);

  useEffect(() => {
    if (stompClient.current) {
      stompClient.current.send(
        "/app/joinroom",
        {},
        JSON.stringify({
          sender: user,
          date: new Date(Date.now()),
          status: "JOIN",
        })
      );
      stompClient.current.send(
        "/app/users-in-room",
        {},
        JSON.stringify({ sender: user })
      );
    }
  }, [user, stompClient.current]);

  useEffect(() => {
    const socket = new SockJS(`${process.env.REACT_APP_ENDPOINT_SERVER}/ws`);
    stompClient.current = over(socket);
    stompClient.current.connect();

    return () => {
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
        status: "MESSAGE",
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
