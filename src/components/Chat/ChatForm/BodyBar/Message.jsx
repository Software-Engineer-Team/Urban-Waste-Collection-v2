import React, { useEffect, useState } from "react";
import {
  MessageContainer,
  MessageDivider,
  MessageContent,
  MessageWrapper,
  MessageOptions,
  MessageOptionsDropDown,
  AvatarUser,
} from "./Message.styled";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import dayjs from "dayjs";

const Message = ({ type, text, imgUrl, date, timeChange }) => {
  return (
    <MessageContainer type={type}>
      {timeChange && (
        <MessageDivider
          data-label={dayjs(date).format("DD/MM/YYYY")}
        ></MessageDivider>
      )}
      <MessageContent type={type}>
        <MessageWrapper type={type}>
          <div className="text">
            <span>{text}</span>
          </div>
        </MessageWrapper>

        <MessageOptions type={type}>
          <AvatarUser>
            <img src={imgUrl} alt="User" />
          </AvatarUser>
          <span>{dayjs(date).format("HH:mm")}</span>
          <MessageOptionsDropDown>
            <BiDotsHorizontalRounded />
          </MessageOptionsDropDown>
        </MessageOptions>
      </MessageContent>
    </MessageContainer>
  );
};

export default Message;
