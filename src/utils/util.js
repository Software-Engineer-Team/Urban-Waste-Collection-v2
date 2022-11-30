import dayjs from "dayjs";
import Swal from "sweetalert2";

const DEFAULT_MONTH = dayjs().month();

export const getMonth = (month = DEFAULT_MONTH) => {
  month = Math.floor(month);
  const year = dayjs().year();
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  console.log("firstDayOfTheMonth: ", firstDayOfTheMonth);
  let currentMonthCount = 0 - firstDayOfTheMonth;
  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  return daysMatrix;
};

export const postData = async (data, url) => {
  const res = await fetch(`${process.env.REACT_APP_ENDPOINT_SERVER}${url}`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
    },
    credentials: "include",
    body: JSON.stringify({ ...data }),
  });
  return res.json();
};

export const fetchData = async (url) => {
  try {
    const data = await fetch(`${process.env.REACT_APP_ENDPOINT_SERVER}${url}`);
    return data.json();
  } catch (err) {
    console.error(err);
  }
};

export const sweetAlertHelper = (title, cb) => {
  let timerInterval;
  Swal.fire({
    title: "<strong>Processing...</strong>",
    html: "Please wait for a minute!!!",
    timer: 2000,
    timerProgressBar: true,
    showCancelButton: true,
    cancelButtonColor: "green",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      Swal.fire({
        position: "center",
        icon: "success",
        title,
        showConfirmButton: false,
        timer: 1500,
      }).then(() => cb());
    }
  });
};
