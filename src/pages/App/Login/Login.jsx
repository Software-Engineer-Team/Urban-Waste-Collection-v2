import React from "react";
import { FaFacebookF, FaGoogle, FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { Link } from "react-router-dom";
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

export default function Home() {
  return (
    <LoginContainer>
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

              <a href="#" className="google">
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
