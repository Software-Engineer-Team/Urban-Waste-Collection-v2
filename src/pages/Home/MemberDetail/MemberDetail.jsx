import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import GeneralHeader from "@utils/GeneralHeader";
import { Container } from "./MemberDetail.styled";
import Progress from "@components/Staffs/Progress";
import { Fade } from "react-reveal";

const MemberDetail = () => {
  return (
    <>
      <GeneralHeader type="Thông tin chi tiết" />
      <Container>
        <div className="member-detail">
          <div className="member-body">
            <Fade left>
              <div className="member-body-left">
                <div className="img">
                  <img src="/images/member/member-2.jpg" alt="" />
                </div>
              </div>
            </Fade>
            <Fade right>
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
                    Tôi giúp khách hàng của mình nổi bật và họ giúp tôi phát
                    triển.
                  </p>
                  <p className="text2">
                    Lorem ipsum dolor sit amet, con adipiscing elit tiam
                    convallis elit id impedie. Quisq commodo simply free ornare
                    tortor.
                  </p>
                  <p className="text3">
                    Nếu bạn định sử dụng một đoạn văn của Lorem Ipsum, bạn cần
                    chắc chắn rằng không có điều gì đáng xấu hổ ẩn giấu ở giữa
                    văn bản.
                  </p>
                </div>
              </div>
            </Fade>
          </div>
          <Fade bottom>
            <div className="member-body-bottom">
              <div className="member-body-bottom-left">
                <span className="tagline">Nhiều điều cần biết</span>
                <h2 className="title">
                  Phục vụ Tập trung vào Tối đa hóa Nguồn lực
                </h2>
              </div>
              <div className="member-body-bottom-right">
                <Progress title="Quản lý chất thải" countText="90%" />
                <Progress title="Tái chế" countText="48%" />
                <Progress title="Thùng rác gia đình" countText="69%" />
              </div>
            </div>
          </Fade>
        </div>
      </Container>
    </>
  );
};

export default MemberDetail;
