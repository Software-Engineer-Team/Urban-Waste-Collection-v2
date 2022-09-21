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
          <a href="/">
            <img src="/images/logo.png" alt="logo" />
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
                  <a href="/">Home Page 1</a>
                </li>
                <li>
                  <a href="/">View Information</a>
                  <div>
                    <FaAngleRight />
                  </div>
                  <ul className="list small-drop">
                    <li>
                      <a href="/">Collectors</a>
                    </li>
                    <li>
                      <a href="/">Janitors</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <div className="dropdown">
                <span className="text">Manage Tasks</span>
              </div>
            </li>
            <li>
              <div className="dropdown">
                <span className="text">Send Messages</span>
              </div>
            </li>
          </ul>
        </HeaderMiddle>
        <LogoutBtn className="logout">LOGOUT</LogoutBtn>
      </Container>
    </MainHeader>
  );
};

export default Header;
