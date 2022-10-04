import React from "react";
import { ChatFooter, InputGroup } from "./InputBar.styled";
import { MdOutlineInsertEmoticon } from "react-icons/md";
import { ImImages, ImAttachment } from "react-icons/im";
import { AiOutlineSend } from "react-icons/ai";

const InputBar = () => {
  return (
    <ChatFooter>
      <InputGroup>
        <div className="images">
          <label htmlFor="images">
            <ImImages />
          </label>
          <input
            type="file"
            style={{ display: "none" }}
            id="images"
            multiple
            accept="image/*"
          />
        </div>

        <div className="attachment">
          <label htmlFor="attachment">
            <ImAttachment />
          </label>
          <input
            type="file"
            style={{ display: "none" }}
            id="attachment"
            multiple
            accept=".xlsx,.xls,.doc, .docx, .ppt, .pptx,.txt, .csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          />
        </div>

        <div>
          <MdOutlineInsertEmoticon />
        </div>
        <div className="enter-text">
          <input type="text" placeholder="Enter your message..."></input>
        </div>
      </InputGroup>
      <button type="submit">
        <AiOutlineSend />
      </button>
    </ChatFooter>
  );
};
export default InputBar;
