import React from "react";
import { Container } from "./Member.styled";
import { BiRightArrowAlt } from "react-icons/bi";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { GrTwitter } from "react-icons/gr";
import { FaPinterestP } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Member = (props) => {
  return (
    <Container>
      <div className="image">
        <img src={`${props.url}`} alt="" />
        <div className="shape">
          <img src="/images/shape.png" alt="" />
        </div>
      </div>
      <div className="content">
        <p className="job">{props.job}</p>
        <h3 className="name">{props.name}</h3>
        <div className="box">
          <div className="social">
            <a href="#">
              <BsFacebook />
            </a>
            <a href="#">
              <GrTwitter />
            </a>
            <a href="#">
              <FaPinterestP />
            </a>
            <a href="#">
              <BsInstagram />
            </a>
          </div>
          <div className="arrow">
            <NavLink to={`/home/staff-details/${props.name}`}>
              <BiRightArrowAlt />
            </NavLink>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Member;
