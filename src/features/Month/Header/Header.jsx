import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { Container, MonthNav, CurrentMonth } from "./Header.styled";
import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";
import {
  monthIndexIncrement,
  monthIndexDecrement,
} from "@features/Month/monthSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { monthIndex } = useSelector((state) => state.month);

  return (
    <Container>
      <MonthNav
        onClick={() => {
          dispatch(monthIndexDecrement());
        }}
      >
        <span>
          <VscTriangleLeft />
          {dayjs()
            .set("month", monthIndex - 1)
            .format("MMMM")}
        </span>
      </MonthNav>
      <CurrentMonth>
        <span>{dayjs().set("month", monthIndex).format("MMMM YYYY")}</span>
      </CurrentMonth>
      <MonthNav
        onClick={() => {
          dispatch(monthIndexIncrement());
        }}
      >
        <span>
          {dayjs()
            .set("month", monthIndex + 1)
            .format("MMMM")}
          <VscTriangleRight />
        </span>
      </MonthNav>
    </Container>
  );
};

export default Header;
