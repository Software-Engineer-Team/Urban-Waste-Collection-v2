import React from "react";
import GeneralHeader from "@utils/GeneralHeader";
import Member from "@components/Staffs/Member";
import { Container } from "./Staffs.styled";

const Staffs = (props) => {
  return (
    <div>
      <GeneralHeader type={props.type} />
      <Container>
        <Member
          job="Account"
          name="Kevin Martin"
          url="/images/member/member-1.jpg"
        />
        <Member
          job="Co Founder"
          name="Jessica Brown"
          url="/images/member/member-2.jpg"
        />
        <Member
          job="Senior Assistant"
          name="David Cooper"
          url="/images/member/member-3.jpg"
        />
        <Member
          job="Manager"
          name="Sarah Albert"
          url="/images/member/member-4.jpg"
        />
        <Member
          job="Director"
          name="Mike Hardson"
          url="/images/member/member-5.jpg"
        />
        <Member
          job="Voice President"
          name="Christine Eve"
          url="/images/member/member-6.jpg"
        />
      </Container>
    </div>
  );
};

export default Staffs;
