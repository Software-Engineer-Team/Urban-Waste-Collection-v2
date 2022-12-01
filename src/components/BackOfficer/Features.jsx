import React from "react";
import { Body, Container } from "./Features.styled";
import { BsNewspaper, BsCalendar2Day, BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaRoute } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import { TiMessages } from "react-icons/ti";

const Features = () => {
  return (
    <Container>
      <Body>
        <ul>
          <li>
            <Link to="/chat-room" className="icon">
              <span>
                <TiMessages />
              </span>
            </Link>
            <h3>
              <Link to="/chat-room">
                Quản lý
                <br />
                tin nhắn
              </Link>
            </h3>
          </li>
          <li>
            <Link to="/home/task-management/calendar" className="icon">
              <span>
                <BsCalendar2Day />
              </span>
            </Link>
            <h3>
              <Link to="/home/task-management/calendar">
                Quản lý
                <br /> thời gian
              </Link>
            </h3>
          </li>
          <li>
            <Link to="/home/task-management/route" className="icon">
              <span>
                <FaRoute />
              </span>
            </Link>
            <h3>
              <Link to="/home/task-management/route">
                Quản lý
                <br /> tuyến đường
              </Link>
            </h3>
          </li>
          <li>
            <Link to="/home/list-staffs/janitors" className="icon">
              <span>
                <HiOutlineUserGroup />
              </span>
            </Link>
            <h3>
              <Link to="/home/list-staffs/janitors">
                Quản lý
                <br /> nhân viên
              </Link>
            </h3>
          </li>
        </ul>
      </Body>
    </Container>
  );
};

export default Features;
