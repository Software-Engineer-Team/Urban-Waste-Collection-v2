import { FaAngleRight } from "react-icons/fa";
import {
  Container,
  HeaderLeft,
  HeaderMiddle,
  LogoutBtn,
  MainHeader,
} from "./Header.styled";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <MainHeader>
      <Container>
        <HeaderLeft>
          <NavLink to="/home/backofficer">
            <img
              src={`${process.env.REACT_APP_ENDPOINT_CLIENT}/images/logo.png`}
              alt="logo"
            />
          </NavLink>
        </HeaderLeft>
        <HeaderMiddle>
          <ul>
            <li>
              <div className="dropdown">
                <span className="text active">Home</span>
              </div>
              <ul className="list">
                <li>
                  <NavLink to="/home/backofficer">Home Page 1</NavLink>
                </li>
                <li>
                  <a href="#">View Information</a>
                  <div>
                    <FaAngleRight />
                  </div>
                  <ul className="list small-drop">
                    <li>
                      <NavLink to="/home/list-staffs/collectors">
                        Collectors
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/home/list-staffs/janitors">
                        Janitors
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <div className="dropdown">
                <NavLink
                  to="/chat-room"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <span className="text">Send Messages</span>
                </NavLink>
              </div>
            </li>
            <li>
              <div className="dropdown">
                <span className="text">Manage Tasks</span>
              </div>
              <ul className="list small-drop">
                <li>
                  <NavLink to="/home/assign-tasks">Collectors</NavLink>
                </li>
                <li>
                  <NavLink to="/home/assign-tasks">Janitors</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <div className="dropdown">
                <NavLink
                  to="/home/work-calendar"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <span className="text">Work Calendar</span>
                </NavLink>
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
