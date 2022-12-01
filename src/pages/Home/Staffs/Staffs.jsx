import React from "react";
import GeneralHeader from "@utils/GeneralHeader";
import Member from "@components/Staffs/Member";
import { Container } from "./Staffs.styled";
import { Fade } from "react-reveal";

const Staffs = (props) => {
  return (
    <div>
      <GeneralHeader type={props.type} />
      <Container>
        <Fade left>
          <Member
            job="Account"
            name="Kevin Martin"
            url="/images/member/member-1.jpg"
          />
        </Fade>
        <Fade bottom>
          <Member
            job="Co Founder"
            name="Jessica Brown"
            url="/images/member/member-2.jpg"
          />
        </Fade>
        <Fade right>
          <Member
            job="Senior Assistant"
            name="David Cooper"
            url="/images/member/member-3.jpg"
          />
        </Fade>
        <Fade left>
          <Member
            job="Manager"
            name="Sarah Albert"
            url="/images/member/member-4.jpg"
          />
        </Fade>
        <Fade bottom>
          <Member
            job="Director"
            name="Mike Hardson"
            url="/images/member/member-5.jpg"
          />
        </Fade>
        <Fade right>
          <Member
            job="Voice President"
            name="Christine Eve"
            url="/images/member/member-6.jpg"
          />
        </Fade>
      </Container>
    </div>
  );
};

export default Staffs;
