import React from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
const SelectOptions = ({
  width,
  widthContainer,
  formType,
  selectOptionsHandler,
  selectVal,
}) => {
  const selectMonthHandler = (e) => {
    selectOptionsHandler({ month: e.target.value });
  };

  const selectYearHandler = (e) => {
    selectOptionsHandler({ year: e.target.value });
  };
  return (
    <SelectionOptionsContainer width={width} widthContainer={widthContainer}>
      {/* <div className="form-type"> */}
      {/*   <label>{formType}</label> */}
      {/* </div> */}
      <div className="form-container">
        <div className="form-content">
          <div className="form-month">
            <select value={selectVal?.month} onChange={selectMonthHandler}>
              {/* {months.map((month, idx) => ( */}
              {/*   <option value={idx + 1} key={idx}> */}
              {/*     {month} */}
              {/*   </option> */}
              {/* ))} */}
            </select>
            <div className="btn-list">
              <IoIosArrowDown />
            </div>
          </div>
          <div className="form-year">
            <select value={selectVal?.year} onChange={selectYearHandler}>
              {/* getYears(1963, 2025) */
              /*   .reverse() */
              /*   .map((year, idx) => ( */
              /*     <option value={year} key={idx}> */
              /*       {year} */
              /*     </option> */
              /*   )) */}
            </select>
            <div className="btn-list">
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      </div>
    </SelectionOptionsContainer>
  );
};

export default SelectOptions;

export const SelectionOptionsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  width: ${({ widthContainer }) => (widthContainer ? widthContainer : "100%")};
  margin-top: 5px;

  .form-type {
    font-weight: 500;
    font-size: 16px;
    text-align: left;
    color: #52525a;
    margin-bottom: 0.25rem;
    font-family: Cambria, Georgia, serif;
  }

  .form-container {
    width: 100%;
    .form-content {
      display: flex;
      align-items: center;

      .form-month,
      .form-year {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #efefef;
        select {
          padding: 10px 20px;
          width: ${({ width }) => (width ? width : "100%")};
          border: 0;
          outline: none;
          cursor: pointer;
          font-family: "Poppins", sans-serif;
          -webkit-appearance: none;
          -moz-appearance: none;
          text-indent: 1px;
          text-overflow: "";
        }

        .btn-list {
          position: absolute;
          right: 5px;
          top: 0;
          bottom: 0;
          padding: 5px;

          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      .form-month {
        margin-right: 8px;
      }
    }
  }
`;
