import styled from "styled-components";
export const ChatHeader = styled.header`
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 300px);
  background-color: hsla(0, 0%, 100%, 0.05);
  border-bottom: 1px solid #eaeaf1;
  color: #666;
  padding: 0.75rem 2.25rem;
  height: 5rem;
  z-index: 100;
  backdrop-filter: blur(7px);
`;

export const AvatarUser = styled.div`
  width: 48px;
  height: 48px;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  img {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    object-fit: cover;
  }
  &:before {
    content: "";
    background-color: #44a675;
    position: absolute;
    display: block;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    bottom: 2px;
    right: 0;
    border: 2px solid #fff;
    z-index: 1;
  }
`;

export const LiTag = styled.li`
  list-style: none;
  padding: ${(props) => props.ptd} ${(props) => props.plr};
  height: 100%;
  svg {
    width: ${(props) => props.w};
    height: ${(props) => props.h};
    margin-top: 1.8px;
  }
`;

export const ChatHeaderAvatar = styled.header`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

export const Media = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;
  align-items: center;
  width: 100%;
  min-width: 195px;
  min-height: 24px;
  margin-bottom: 0.375px;
  font-family: "Cerebri Sans, sans-serif";
  h6 {
    color: #495057;
    margin: 0 auto 0 0;
    font-size: 1rem;
  }
  .text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  small {
    text-align: left;
    font-weight: 400;
    font-size: 80%;
    color: #797c8c;
    margin: 0 auto 0 0;
  }
`;

export const UlChatHeaderOptions = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding-left: 0;
  height: 40px;
  width: 96px;
  a svg {
    color: #5d646b;
  }
  li {
    margin-left: 6px;
  }
  a svg:hover {
    color: #172b4d;
  }
  & a {
    position: relative;
  }
`;
