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
                  <a href="/">Home Page 1</a>
                </li>
                <li>
                  <a href="#">View Information</a>
                  <div>
                    <FaAngleRight />
                  </div>
                  <ul className="list small-drop">
                    <li>
                      <a href="/home/list-staffs">Collectors</a>
                    </li>
                    <li>
                      <a href="/home/list-staffs">Janitors</a>
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
        <LogoutBtn href="/" className="logout">
          LOGOUT
        </LogoutBtn>
      </Container>
    </MainHeader>
  );
};

export default Header;
