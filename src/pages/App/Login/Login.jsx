import React, { useEffect, useState } from "react";
import { FaFacebookF, FaGoogle, FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
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
import { useDispatch } from "react-redux";
import { setUser } from "@features/User/userSlice";
import { postData, sweetAlertHelper } from "@utils/util";

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    onSuccess: async (e) => {
      console.log(e.profileObj);
      const user = await postData(
        { email: e.profileObj.email },
        "/api/user/sign-in-google"
      );
      console.log(user);
      if (user) {
        dispatch(
          setUser({
            name: e.profileObj.name,
            imgUrl: e.profileObj.imageUrl,
            roles: user.roles,
          })
        );
        navigate("/home");
      }
    },
    onFailure: (e) => {
      console.log(e);
    },
  });

  const googleLoginHandler = () => {
    signIn();
  };

  const signInHandler = async () => {
    let timerInterval;
    Swal.fire({
      title: "<strong>Processing...</strong>",
      html: "Please wait for a minute!!!",
      timer: 1000,
      timerProgressBar: true,
      allowOutsideClick: false,
      didOpen: async () => {
        Swal.showLoading();
        const data = await postData({ email, password }, "/api/user/sign-in");
        if (!data.error) {
          dispatch(
            setUser({
              name: data.name,
              imgUrl: data.imageUrl,
              roles: data.roles,
            })
          );
          Swal.close();
          navigate("/home");
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            html: data?.error || "Something went wrong!!!",
            showConfirmButton: "Ok",
            allowOutsideClick: false,
          });
        }
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    });
  };

  return (
    <LoginContainer id="login-container">
      <LoginMain>
        <LoginContent className="login-content">
          <SignInSection>
            <div className="group-name">
              <div>
                <span>Urban-Waste-Collection-v2</span>
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
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>

              <div className="password">
                <span>
                  <MdLockOutline />
                </span>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>

              <div className="forgot-password">
                <a href="#">Forgot password?</a>
              </div>

              {/* <Link to="/home"> */}
              <div className="signin-btn" onClick={signInHandler}>
                <div>Sign in</div>
              </div>
              {/* </Link> */}
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
