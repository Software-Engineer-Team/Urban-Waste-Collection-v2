import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background-color: rgb(243, 244, 246);
`;

export const LoginMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
`;

export const LoginContent = styled.div`
  background-color: #ffffff;
  display: flex;
  width: 100%;
  border-radius: 16px;
  text-align: center;
  max-width: 896px;
`;

export const SignInSection = styled.div`
  display: flex;
  width: 60%;
  padding: 20px;
  flex-direction: column;

  .group-name {
    div {
      text-align: left;
      font-weight: 700;
      text-align: left;
      span {
        color: rgb(34, 197, 94);
      }
    }
  }

  .header-sign-in {
    padding: 10px 0;
    h2 {
      font-weight: 600;
      color: rgb(34, 197, 94);
      font-size: 30px;
      line-height: 36px;
      margin: 10px 0;
    }
  }
`;

export const OthersLoginSection = styled.div`
  display: flex;
  justify-content: center;
  margin: 4px 0;
  border-radius: 50%;
  a {
    border: 2px solid rgb(229, 231, 235);
    border-radius: 50%;
    margin: 0 4px;
    transition: all 0.2s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    svg {
      font-size: 14px;
      line-height: 20px;
    }
  }

  a.facebook {
    color: #4867aa;
    &:hover {
      color: #ffffff;
      background-color: #4867aa;
    }
  }

  a.google {
    color: #db4437;
    &:hover {
      color: #ffffff;
      background-color: #db4437;
    }
  }
`;

export const SocialLoginSectionHeader = styled.p`
  color: rgb(156, 163, 175);
  margin: 12px 0;
`;

export const SocialLoginSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  div.password,
  div.email {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(243, 244, 246);
    margin-bottom: 12px;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        margin: 8px;
        color: rgb(156, 163, 175);
      }
    }
    input {
      background-color: rgb(243, 244, 246);
      flex: 1;
      font-size: 14px;
      line-height: 20px;
      color: rgb(75, 85, 99);
      border: 0;
      outline: none;
    }
  }

  div.forgot-password {
    width: 256px;
    margin-bottom: 20px;
    position: relative;
    a {
      text-decoration: none;
      font-size: 12px;
      color: #9ca3af;
      line-height: 16px;
      position: absolute;
      right: 0;
      margin-top: 4px;
      &:hover {
        color: #535353;
      }
    }
  }
  div.signin-btn {
    margin-top: 12px;
    div {
      border-radius: 50px;
      border: 2px solid rgb(34, 197, 94);
      padding: 8px 48px;
      display: inline-block;
      font-weight: 600;
      transition: all 0.2s ease-in-out;
      color: black;
      text-decoration: none;
      &:hover {
        color: white;
        background-color: rgb(34, 197, 94);
      }
    }
  }
`;

export const SignUpSection = styled.div`
  width: 40%;
  border-bottom-right-radius: 16px;
  border-top-right-radius: 16px;
  background-color: rgb(34, 197, 94);
  display: flex;
  flex-direction: column;
  color: #ffffff;
  padding: 0 48px;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  div {
    height: 2px;
    width: 100px;
    background-color: white;
    align-self: center;
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 8px;
  }
  a {
    border: 2px solid white;
    border-radius: 50px;
    padding: 8px 28px;
    margin-top: 20px;
    text-decoration: none;
    color: white;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: white;
      color: rgb(34, 197, 94);
    }
  }
`;

export const LineBreak = styled.div`
  height: 2px;
  background-color: rgb(34, 197, 94);
  width: 224px;
  align-self: center;
  margin-bottom: 10px;
`;
