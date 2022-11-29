import React, { useEffect } from "react";
import { FaFacebookF, FaGoogle, FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import useBackDrop from "@hook/useBackDrop";
import {
  LoginContainer,
  LoginMain,
  LoginContent,
  SignInSection,
  SignUpSection,
  OthersLoginSection,
  SocialLoginSection,
  SocialLoginSectionHeader,
  LineBreak,
} from "./Login.styled";
import { useGoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";

export default function Home() {
  const navigate = useNavigate();
  useBackDrop("login-container");

  useEffect(() => {
    document.getElementById("particles-js").style.visibility = "visible";
    return () => {
      document.getElementById("particles-js").style.visibility = "hidden";
    };
  }, []);

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  }, []);

  const { signIn } = useGoogleLogin({
    clientId: process.env.REACT_APP_CLIEND_ID,
    scope: "",
    cookiePolicy: "single_host_origin",
    isSignedIn: false,
    onSuccess: (e) => {
      console.log(e);
      navigate("/home/backofficer");
    },
    onFailure: (e) => {
      console.log(e);
    },
  });

  const googleLoginHandler = () => {
    signIn();
  };

  return (
    <LoginContainer id="login-container">
      <LoginMain>
        <LoginContent>
          <SignInSection>
            <div className="group-name">
              <div>
                <span>Group </span> name
              </div>
            </div>
            <div className="header-sign-in">
              <h2>Sign in to Account</h2>
            </div>

            <LineBreak />

            <OthersLoginSection>
              <a href="#" className="facebook">
                <FaFacebookF />
              </a>

              <a href="#" className="google" onClick={googleLoginHandler}>
                <FaGoogle />
              </a>
            </OthersLoginSection>

            <SocialLoginSectionHeader>
              or use your email account
            </SocialLoginSectionHeader>
            <SocialLoginSection>
              <div className="email">
                <span>
                  <FaRegEnvelope />
                </span>
                <input type="email" placeholder="Email" />
              </div>

              <div className="password">
                <span>
                  <MdLockOutline />
                </span>
                <input type="password" placeholder="Password" />
              </div>

              <div className="forgot-password">
                <a href="#">Forgot password?</a>
              </div>

              <Link to="/home/backofficer">
                <div className="signin-btn">
                  <div>Sign in</div>
                </div>
              </Link>
            </SocialLoginSection>
          </SignInSection>
          <SignUpSection>
            <h2>Hello Friend!!</h2>
            <LineBreak />
            <p>Fill up personal information and join with us.</p>
            <a href="#">Sign up</a>
          </SignUpSection>
        </LoginContent>
      </LoginMain>
    </LoginContainer>
  );
}
