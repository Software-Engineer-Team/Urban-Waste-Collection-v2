import styled from "styled-components";

export const Container = styled.div`
  min-width: 300px;
  max-width: 300px;
  height: 100vh;
  background-color: white;
  box-shadow: 0 2px 4px rgb(15 34 58 / 12%);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ContentTop = styled.div`
  padding: 1.5rem 1.5rem 0;

  .search {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;
    margin-bottom: 1rem;
    input {
      display: block;
      width: 100%;
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.5;
      color: #495057;
      background-color: #f6f6f9;
      border: 1px solid #e6ebf5;
      border-radius: 0.25rem;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      outline: none;
    }
  }

  .title {
    display: flex;
    align-items: flex-start;

    .title-header {
      width: 100%;
      h4 {
        margin: 0;
        color: #495057;
        font-size: 21px;
        margin-bottom: 1.5rem;
        margin-top: 0;
        font-weight: 600;
        line-height: 1.2;
      }
    }
    .add-contact {
      cursor: pointer;
      background-color: #4eac6d1a;
      svg {
        color: #4eac6d;
      }
      padding: 0.25rem 0.5rem;
      font-size: 0.82031rem;
      border-radius: 0.2rem;
      transition: all 0.2s ease-in-out;
      border: 1px solid transparent;

      &:hover {
        background-color: #4eac6d;
        svg {
          color: white;
        }
      }
    }
  }
`;
export const ContentBody = styled.div`
  overflow: scroll;
  max-height: 100%;
  &::-webkit-scrollbar {
    display: none;
  }

  & > h5 {
    color: #797c8c;
    text-transform: uppercase;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    margin: 0;
    margin-top: 1.5rem;
  }
`;

export const ChatsList = styled.ul`
  list-style: none;
  padding: 0.75rem;
  margin: 0;
  margin-bottom: 1rem;
  background-color: white;
  height: 100%;
  /* max-height: calc(100vh - 140px); */
  color: #abd5bd;
  /* overflow: scroll; */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ChatItem = styled.li`
  margin: 0.75rem 0;
  cursor: pointer;
  max-width: 100%;
  max-height: 90%;
  position: relative;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  border-radius: 0.25rem;

  & > a,
  & > div {
    display: flex;
    border: 1px solid #4b4b60;
    border-radius: 0.25rem;
    transition: all 0.3s ease;
    padding: 0.5rem 0.7rem;
    align-items: center;
    color: #fff;
    text-decoration: none;

    &:hover {
      border-color: #4eac6d;
    }
  }
  &:hover {
    background-color: #4eac6d;
    h6 {
      color: white;
    }
  }
`;

export const Avatar = styled.div`
  width: 2rem;
  height: 2rem;
  min-width: 2rem;
  position: relative;
  background-color: transparent;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  &:before {
    ${(props) =>
      props.isLoggined &&
      `
    background: #44a675;
    content: "";
    display: block;
    position: absolute;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    top: 22px;
    right: -2px;
    // border: 3px solid #fff;
    `}
  }
`;
export const ChatContent = styled.div`
  padding-left: 0.875rem;
  transition: all 0.4s;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ChatInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.375rem;
  line-height: 1.8;
  width: 100%;

  h6 {
    margin: 0;
    font-size: 0.875rem;
    margin-right: auto;
    color: #5a636c;
  }

  div {
    color: #adb5bd;
  }
`;
/* export const ChatText = styled.div` */
/*   display: flex; */
/**/
/*   svg { */
/*     ${(props) => props.type === "Calls" && !props.accepted && `color: #FF337C`} */
/*   } */
/*   p { */
/*     color: #f8f9fa; */
/*     overflow: hidden; */
/*     text-overflow: ellipsis; */
/*     white-space: nowrap; */
/*     margin: 0; */
/*     ${(props) => */
/*       props.type === "Friends" */
/*         ? ` */
/*          width: 100%; */
/*          margin-left: 7px; */
/*          line-height: 1.4; */
/*       ` */
/*         : props.type === "Calls" && */
/*           ` */
/*          width: 100%; */
/*          margin-left: 7px; */
/*          line-height: 1.2; */
/*     `} */
/*   } */
/* `; */
