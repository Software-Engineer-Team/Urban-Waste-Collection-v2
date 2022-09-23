import { FaAngleRight } from "react-icons/fa";
import {
  Container,
  HeaderLeft,
  HeaderMiddle,
  LogoutBtn,
  MainHeader,
} from "./Header.styled";

const Header = () => {
  return (
    <MainHeader>
      <Container>
        <HeaderLeft>
          <a href="#">
            <img
              src={`${process.env.REACT_APP_ENDPOINT_CLIENT}/images/logo.png`}
              alt="logo"
            />
          </a>
        </HeaderLeft>
        <HeaderMiddle>
          <ul>
            <li>
              <div className="dropdown">
                <span className="text active">Home</span>
              </div>
              <ul className="list">
                <li>
                  <a href="/home/backofficer">Home Page 1</a>
                </li>
                <li>
                  <a href="#">View Information</a>
                  <div>
                    <FaAngleRight />
                  </div>
                  <ul className="list small-drop">
                    <li>
                      <a href="/home/list-staffs/collectors">Collectors</a>
                    </li>
                    <li>
                      <a href="/home/list-staffs/janitors">Janitors</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <div className="dropdown">
                <span className="text">Manage Tasks</span>
              </div>
              <ul className="list small-drop">
                <li>
                  <a href="/home/assign-tasks">Collectors</a>
                </li>
                <li>
                  <a href="/home/assign-tasks">Janitors</a>
                </li>
              </ul>
            </li>
            <li>
              <div className="dropdown">
                <span className="text">
                  <a
                    href="/chat-room"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Send Messages
                  </a>
                </span>
              </div>
            </li>
          </ul>
        </HeaderMiddle>
        <LogoutBtn href="/" className="logout">
          LOGOUT
        </LogoutBtn>
      </Container>
    </MainHeader>
  );
};

export default Header;
