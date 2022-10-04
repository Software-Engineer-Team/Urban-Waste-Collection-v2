import React from "react";
import { Body, Container } from "./Features.styled";
import { BsNewspaper, BsCalendar2Day, BsTrash } from "react-icons/bs";

const Features = () => {
  return (
    <Container>
      <Body>
        <ul>
          <li>
            <div className="icon">
              <span>
                <BsNewspaper />
              </span>
            </div>
            <h3>
              <a href="/">
                You Estimate <br />
                Load Size
              </a>
            </h3>
          </li>
          <li>
            <div className="icon">
              <span>
                <BsCalendar2Day />
              </span>
            </div>
            <h3>
              <a href="/">
                You Choose <br />a Time
              </a>
            </h3>
          </li>
          <li>
            <div className="icon">
              <span>
                <BsTrash />
              </span>
            </div>
            <h3>
              <a href="/">
                We Pick <br />& Clean up
              </a>
            </h3>
          </li>
          <li>
            <div className="icon">
              <span>
                <BsTrash />
              </span>
            </div>
            <h3>
              <a href="/">
                We Responsibly <br /> dispose
              </a>
            </h3>
          </li>
        </ul>
      </Body>
    </Container>
  );
};

export default Features;
