import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import GeneralHeader from "@utils/GeneralHeader";
import { Container } from "./MemberDetail.styled";
import Progress from "@components/Staffs/Progress";

const MemberDetail = () => {
  return (
    <>
      <GeneralHeader type="Information Detail" />
      <Container>
        <div className="member-detail">
          <div className="member-body">
            <div className="member-body-left">
              <div className="img">
                <img
                  src={`${process.env.REACT_APP_ENDPOINT_CLIENT}/images/member/member-2.jpg`}
                  alt=""
                />
              </div>
            </div>
            <div className="member-body-right">
              <div className="content">
                <p className="title">Co Founder</p>
                <h3 className="name">Jessica Brown</h3>
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
                <p className="text1">
                  I help my clients stand out and they help me grow.
                </p>
                <p className="text2">
                  Lorem ipsum dolor sit amet, con adipiscing elit tiam convallis
                  elit id impedie. Quisq commodo simply free ornare tortor.
                </p>
                <p className="text3">
                  If you are going to use a passage of Lorem Ipsum, you need to
                  be sure there isn't anything embarrassing hidden in the middle
                  of text.
                </p>
              </div>
            </div>
          </div>
          <div className="member-body-bottom">
            <div className="member-body-bottom-left">
              <span className="tagline">More to Know</span>
              <h2 className="title">
                Serves with a Focus on Maximizing Resource
              </h2>
            </div>
            <div className="member-body-bottom-right">
              <Progress title="Waste Management" countText="90%" />
              <Progress title="Recycling" countText="48%" />
              <Progress title="Home Trash" countText="69%" />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default MemberDetail;
