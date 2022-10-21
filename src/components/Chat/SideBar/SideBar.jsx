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

const SideBar = () => {
  return (
    <Container>
      <Content>
        <ContentTop>
          <div className="title">
            <div className="title-header">
              <h4>Chats</h4>
            </div>
            <NavLink to="/home/backofficer">
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
            {Array(18)
              .fill()
              .map(() => {
                return (
                  <ChatItem key={uuidv4()}>
                    <Link to="#">
                      <Avatar isLoggined={true}>
                        <img
                          src={`${process.env.REACT_APP_ENDPOINT_CLIENT}/images/member/member-1.jpg`}
                          alt=""
                        />
                      </Avatar>
                      <ChatContent>
                        <ChatInfo>
                          <h6>caohoangkiet</h6>
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
