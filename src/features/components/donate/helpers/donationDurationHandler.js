export const getDateObj = (date = null) => {
  const dateObj = {};

  if (!date) {
    const targetDate = new Date();
    const month = targetDate.getMonth();
    const day = targetDate.getDate();

    dateObj.month = month;
    dateObj.day = day;
    return dateObj;
  }

  const targetDate = new Date(date);
  const month = targetDate.getMonth();
  const day = targetDate.getDate();

  dateObj.month = month;
  dateObj.day = day;
  return dateObj;
};

export const getRemainingDays = (
  getDateObj,
  donationStart,
  duration,
  start,
  current
) => {
  if (start.month < current.month) {
    const startDate = donationStart.split("-");
    startDate[2] = "31";

    let a31DayMonth = getDateObj(startDate);
    if (a31DayMonth.month === start.month) {
      const prevMonthDay = a31DayMonth.day - start.day;
      return duration - (prevMonthDay + current.day);
    }
    const prevMonthDay = 30 - start.day;
    return duration - (prevMonthDay + current.day);
  } else if (start.month === current.month) {
    return duration - (start.day + current.day);
  }
  return 0;
};
