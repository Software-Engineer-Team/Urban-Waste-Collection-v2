import { Month } from "./Calendar.styled";
import Day from "./Day";
import { getMonth } from "../Util/util.js";
const Calendar = () => {
  getMonth(2)
  return (
    <div>
      <div style={{ height: 70 }}></div>
      <Month>
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
      </Month>
    </div>
  );
};

export default Calendar;
