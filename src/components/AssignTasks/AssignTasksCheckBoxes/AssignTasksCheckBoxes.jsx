import styled from "styled-components";
import { TiTick } from "react-icons/ti";
import { useRef } from "react";

const LiCheckBox = ({ capacity }) => {
  const capacityRef = useRef(null);
  const toggleActiveCheckBox = (e) => {
    capacityRef.current.classList.toggle("active");
  };
  return (
    <li onClick={toggleActiveCheckBox}>
      <label onClick={(e) => e.preventDefault()}>
        <input type="checkbox" id="input" />
        <span ref={capacityRef}>
          {capacity}
          <TiTick />
        </span>
      </label>
    </li>
  );
};

const AssignTasksCheckBoxes = () => {
  return (
    <AssignTasksListCheckBoxes>
      <ul>
        <LiCheckBox capacity={"32 Gallon"} />
        <LiCheckBox capacity={"64 Gallon"} />
        <LiCheckBox capacity={"92 Gallon"} />
      </ul>
    </AssignTasksListCheckBoxes>
  );
};

const AssignTasksListCheckBoxes = styled.div`
  position: relative;
  ul {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 0;
    list-style: none;
    flex-wrap: wrap;
    li {
      padding: 0 15px;
      label {
        position: relative;
        z-index: 10;
        font-size: 16px;
        font-weight: 500;
        padding-left: 35px;
        cursor: pointer;
        margin-bottom: 0.5rem;
        display: inline-block;
        input {
          display: none;
        }
        span {
          font-size: 16px;
          color: #404a3d;
          font-weight: 500;
          cursor: pointer;
          &.active {
            &:before {
              background-color: #558e4c;
            }
            svg {
              color: white;
            }
          }
          svg {
            position: absolute;
            top: 4px;
            left: 5px;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            color: white;
          }
          &:before {
            transition: all 0.25s ease-in-out;
            content: "";
            border: 1px solid #ebe5dd;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            position: absolute;
            top: 0px;
            left: 0;
            &:active {
            }
          }
        }
      }
    }
  }
`;

export default AssignTasksCheckBoxes;
