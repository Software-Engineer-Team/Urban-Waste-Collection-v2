import React, { useEffect, useRef } from "react";
import { FaAngleRight } from "react-icons/fa";
import {
  Container,
  HeaderLeft,
  HeaderMiddle,
  LogoutBtn,
  MainHeader,
} from "./Header.styled";
import { Link, NavLink, useParams } from "react-router-dom";
import { checkRoleOfUser } from "@utils/util";
import { useSelector } from "react-redux";

const Header = () => {
  const { roles } = useSelector((state) => state.user);
  const params = useParams();
  const ulEl = useRef(null);

  useEffect(() => {
    let el = null;
    console.log(params["*"].split("/")[0]);
    switch (params["*"].split("/")[0]) {
      case "backofficer":
        el = ulEl.current.querySelector("#backofficer span");
        break;
      case "work-calendar":
        el = ulEl.current.querySelector("#work-calendar span");
        break;
      case "task-assignment":
        el = ulEl.current.querySelector("#task-assignment span");
        break;
      case "task-management":
      case "list-staffs":
      case "staff-details":
        el = ulEl.current.querySelector("#task-management span");
        break;
      default:
        break;
    }

    if (el !== null) {
      el.classList.add("active");
    }

    return () => {
      if (el && el.classList) el.classList.remove("active");
    };
  }, [params]);

  return (
    <MainHeader>
      <Container>
        <HeaderLeft>
          <NavLink to="/home">
            <img
              src={`${process.env.REACT_APP_ENDPOINT_CLIENT}/images/UWC-logo.png`}
              alt="logo"
            />
          </NavLink>
        </HeaderLeft>
        <HeaderMiddle>
          <ul ref={ulEl}>
            <li>
              <div className="dropdown">
                <Link to="/home" className="dropdown" id="backofficer">
                  <span className="text">Trang chủ</span>
                </Link>
              </div>
              {/* <ul className="list"> */}
              {/* <li> */}
              {/*   <NavLink to="/home">Home Page</NavLink> */}
              {/* </li> */}
              {/* <li> */}
              {/*   <a href="#">View Information</a> */}
              {/*   <div> */}
              {/*     <FaAngleRight /> */}
              {/*   </div> */}
              {/*   <ul className="list small-drop"> */}
              {/*     <li> */}
              {/*       <NavLink to="/home/list-staffs/collectors"> */}
              {/*         Collectors */}
              {/*       </NavLink> */}
              {/*     </li> */}
              {/*     <li> */}
              {/*       <NavLink to="/home/list-staffs/janitors"> */}
              {/*         Janitors */}
              {/*       </NavLink> */}
              {/*     </li> */}
              {/*   </ul> */}
              {/* </li> */}
              {/* </ul> */}
            </li>
            {checkRoleOfUser(roles) && (
              <>
                <li>
                  <div className="dropdown" id="task-management">
                    <span className="text">Quản lý tác vụ</span>
                  </div>
                  <ul className="list">
                    <li>
                      <NavLink to="/home/task-management/area">
                        Quản lý khu vực
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/home/task-management/calendar">
                        Quản lý lịch
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/home/task-management/route">
                        Quản lý tuyến đường
                      </NavLink>
                    </li>
                    {/* <li> */}
                    {/*   <NavLink to="/home/task-management/vehicle"> */}
                    {/*     Quản lý phương tiện */}
                    {/*   </NavLink> */}
                    {/* </li> */}
                    <li>
                      <a href="#">Quản lý công nhân</a>
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
                  <div className="dropdown" id="task-assignment">
                    <span className="text">Phân công nhiệm vụ</span>
                  </div>
                  <ul className="list small-drop">
                    <li>
                      <NavLink to="/home/task-assignment">Collectors</NavLink>
                    </li>
                    <li>
                      <NavLink to="/home/task-assignment">Janitors</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="dropdown">
                    <NavLink
                      to="/chat-room"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <span className="text">Gửi tin nhắn</span>
                    </NavLink>
                  </div>
                </li>
              </>
            )}
          </ul>
        </HeaderMiddle>
        <LogoutBtn href="/" className="logout">
          Đăng xuất
        </LogoutBtn>
      </Container>
    </MainHeader>
  );
};

export default Header;
