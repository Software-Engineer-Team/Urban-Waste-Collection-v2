import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { checkSameDate } from "@utils/util";
import { BodyContainer, BodyContent } from "./BodyBar.styled";
import { v4 as uuidv4 } from "uuid";
import Message from "./Message";

const BodyBar = ({ messages }) => {
  const user = useSelector((state) => state.user);
  const preTime = useRef(null);
  const timeChange = useRef(true);
  const messagesMap = messages?.map(({ sender, date, message }, idx) => {
    if (!checkSameDate(preTime.current, date) || idx === 0) {
      preTime.current = date;
      timeChange.current = true;
    } else {
      timeChange.current = false;
    }

    if (user?.name === sender?.name) {
      return (
        <Message
          key={uuidv4()}
          type="right"
          text={message}
          date={date}
          imgUrl={sender.imgUrl}
          timeChange={timeChange.current}
        />
      );
    }
    return (
      <Message
        key={uuidv4()}
        type="left"
        text={message}
        date={date}
        imgUrl={sender.imgUrl}
        timeChange={timeChange.current}
      />
    );
  });
  return (
    <BodyContainer>
      <BodyContent>{messagesMap}</BodyContent>
    </BodyContainer>
  );
};

export default BodyBar;
