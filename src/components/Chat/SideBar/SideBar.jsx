import React from "react";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import {
  Avatar,
  ChatContent,
  ChatInfo,
  ChatItem,
  ChatsList,
  ChatText,
  Container,
  Content,
  ContentBody,
  ContentTop,
} from "./SideBar.styled";
import { v4 as uuidv4 } from "uuid";

const SideBar = ({ usersJoin }) => {
  return (
    <Container>
      <Content>
        <ContentTop>
          <div className="title">
            <div className="title-header">
              <h4>Chats</h4>
            </div>
            <NavLink to="/home">
              <div className="add-contact">
                <IoReturnDownBackOutline />
              </div>
            </NavLink>
          </div>
          <div className="search">
            <input type="text" placeholder="Search here" />
          </div>
        </ContentTop>
        <ContentBody>
          <h5>Collectors</h5>
          <ChatsList>
            {usersJoin?.map(({ name, imgUrl, roles }) => {
              return (
                <ChatItem key={uuidv4()}>
                  <Link to="#">
                    <Avatar isLoggined={true}>
                      <img src={imgUrl} alt="" />
                    </Avatar>
                    <ChatContent>
                      <ChatInfo>
                        <h6>{name}</h6>
                      </ChatInfo>
                    </ChatContent>
                  </Link>
                </ChatItem>
              );
            })}
          </ChatsList>
        </ContentBody>
      </Content>
    </Container>
  );
};

export default SideBar;
