import { fromUnixTime } from 'date-fns';

function getDate(date) {
  const dateFromTimestamp = fromUnixTime(date);
  const day = dateFromTimestamp.getDate();
  const dayOfWeek = dateFromTimestamp.getDay();
  const month = dateFromTimestamp.getMonth();
  const year = dateFromTimestamp.getFullYear();

  let nameOfMonth;
  let nameOfDay;

  switch(month) {
    case 0: 
      nameOfMonth = 'January';
      break;

    case 1: 
      nameOfMonth = 'February';
      break;

    case 2: 
      nameOfMonth = 'March';
      break;

    case 3: 
      nameOfMonth = 'April';
      break;

    case 4: 
      nameOfMonth = 'May';
      break;

    case 5: 
      nameOfMonth = 'June';
      break;

    case 6: 
      nameOfMonth = 'July';
      break;

    case 7: 
      nameOfMonth = 'August';
      break;

    case 8: 
      nameOfMonth = 'September';
      break;

    case 9: 
      nameOfMonth = 'October';
      break;

    case 10: 
      nameOfMonth = 'November';
      break;

    case 11: 
      nameOfMonth = 'December';
      break;
  }

  switch(dayOfWeek) {
    case 1:
      nameOfDay = 'Mondey';
      break;

    case 2:
      nameOfDay = 'Tuesday';
      break;

    case 3:
      nameOfDay = 'Wensday';
      break;

    case 4:
      nameOfDay = 'Thursday';
      break;

    case 5:
      nameOfDay = 'Friday';
      break;

    case 6:
      nameOfDay = 'Saturday';
      break;

    case 7:
      nameOfDay = 'Sunday';
      break;
  }

  const objDate = {
    day: day,
    nameDay: nameOfDay,
    month: nameOfMonth,
    year: year,
  };

  return objDate;
}

export { getDate };