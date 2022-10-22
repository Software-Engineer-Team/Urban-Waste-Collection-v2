import { useState } from "react";
import AssignTasksCheckBoxes from "../AssignTasksCheckBoxes/AssignTasksCheckBoxes";
import {
  AssignTasksListForm,
  AssignTasksListFormBtn,
  AssignTasksListFormCol,
  AssignTasksListFormContent,
  AssignTasksListFormDate,
  AssignTasksListFormInputSelect,
  AssignTasksListFormInputText,
  AssignTasksListFormInputTextArea,
  AssignTasksListFormRow,
  AssignTasksListImg,
} from "./AssignTasksForm.styled";
import { RiArrowDropDownLine, RiArrowDropRightLine } from "react-icons/ri";

const DropDownUsers = ({ dropDownUsers }) => {
  return (
    <div className={`drop-down ${dropDownUsers ? "show-drop-down" : ""}`}>
      <ul>
        <li>
          <div>
            <span>Cao Tuan Kiet</span>
          </div>
        </li>
        <li>
          {/* <div className="selected"> */}
          <div>
            <span>Cao Hoang Kiet</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

const AssignTasksForm = ({ url, type }) => {
  const [dropDownUsers, setDropDownUsers] = useState(false);
  const [isAssignRoute, setIsAssignRoute] = useState(false);
  const showDropDownUsers = (e) => {
    setDropDownUsers((oldDrop) => !oldDrop);
  };
  return (
    <AssignTasksListForm>
      <AssignTasksCheckBoxes />
      <AssignTasksListImg>
        <img src={url} alt="Rubish" />
      </AssignTasksListImg>
      <AssignTasksListFormContent>
        <AssignTasksListFormRow>
          <AssignTasksListFormCol>
            <AssignTasksListFormInputSelect>
              <select id="" name="">
                <option value="Select Waste Type">Select Waste Type</option>
                <option value="32 Gallon">32 Gallon</option>
                <option value="64 Gallon">64 Gallon</option>
                <option value="96 Gallon">96 Gallon</option>
              </select>
              <div className="btn" onClick={showDropDownUsers}>
                <div>
                  {type == "Collectors"
                    ? "Choose Collectors"
                    : "Choose Janitors"}
                </div>
                <span>
                  {!dropDownUsers ? (
                    <RiArrowDropRightLine />
                  ) : (
                    <RiArrowDropDownLine />
                  )}
                </span>
              </div>
              <DropDownUsers dropDownUsers={dropDownUsers} />
            </AssignTasksListFormInputSelect>
            <AssignTasksListFormInputText
              placeholder={type == "Collectors" ? "Assign MCP" : "Assign area"}
              wid="100%"
              onClick={() => setIsAssignRoute(!isAssignRoute)}
            />
            <AssignTasksListFormDate>
              <AssignTasksListFormInputText
                type="text"
                wid="45%"
                onMouseEnter={(e) => {
                  e.target.disabled = false;
                  return (e.target.type = "date");
                }}
                onMouseLeave={(e) => {
                  e.target.disabled = true;
                  return (e.target.type = "text");
                }}
                placeholder="Pick up date"
              />
              <AssignTasksListFormInputText
                type="text"
                wid="45%"
                onMouseEnter={(e) => {
                  e.target.disabled = false;
                  return (e.target.type = "time");
                }}
                onMouseLeave={(e) => {
                  e.target.disabled = true;
                  return (e.target.type = "text");
                }}
                placeholder="Pick up time"
              />
            </AssignTasksListFormDate>
          </AssignTasksListFormCol>
          <AssignTasksListFormCol>
            <AssignTasksListFormInputTextArea placeholder="Brief description of waste to be removed" />
          </AssignTasksListFormCol>
        </AssignTasksListFormRow>
        <AssignTasksListFormBtn>
          <a href="#">Submit</a>
        </AssignTasksListFormBtn>
      </AssignTasksListFormContent>
    </AssignTasksListForm>
  );
};

export default AssignTasksForm;
