'use strict';

console.clear();
{
  const year = 2020;
  const month = 4;

  function getCalendarBody() {
    const dates = [];
    const lastDate = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i <= lastDate; i++) {
      dates.push({
        date: 1,
        isToday: false,
        isDisabled: false,
      });
    }

    console.log(dates);
  }

  getCalendarBody();
}