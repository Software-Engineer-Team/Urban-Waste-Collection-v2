import React from "react";
import {
  ChatHeader,
  ChatHeaderAvatar,
  Media,
  UlChatHeaderOptions,
  AvatarUser,
  LiTag,
} from "./HeaderBar.styled";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsTelephone, BsSearch } from "react-icons/bs";

const HeaderBar = () => {
  return (
    <ChatHeader>
      <ChatHeaderAvatar className="text-truncate">
        <AvatarUser status={true}>
          <img src="/images/member/member-1.jpg" alt="User" />
        </AvatarUser>
        <Media>
          <h6 className="text-truncate">Kiet Cao</h6>
          <small>Active</small>
        </Media>
      </ChatHeaderAvatar>
      <UlChatHeaderOptions>
        <a href="#">
          <LiTag ptd="8px" plr="6px" w="1.25rem" h="1.25rem">
            <BsSearch />
          </LiTag>
        </a>
        <a href="#">
          <LiTag ptd="8px" plr="6px" w="1.25rem" h="1.25rem">
            <BsTelephone />
          </LiTag>
        </a>
        <a href="#">
          <LiTag ptd="8px" plr="6px" w="1.25rem" h="1.25rem">
            <BiDotsVerticalRounded />
          </LiTag>
        </a>
      </UlChatHeaderOptions>
    </ChatHeader>
  );
};

export default HeaderBar;
