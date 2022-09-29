import dayjs from "dayjs";

const DEFAULT_MONTH = dayjs().month();

export const getMonth = (month = DEFAULT_MONTH) => {
  console.log(month)
}
