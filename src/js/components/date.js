import { fromUnixTime } from 'date-fns';

function getDate(date) {
  const dateFromTimestamp = fromUnixTime(date);
  const day = dateFromTimestamp.getDate();
  const dayOfWeek = dateFromTimestamp.getDay();
  const month = dateFromTimestamp.getMonth();
  const year = dateFromTimestamp.getFullYear();

  let nameOfMonth;
  let nameOfDay;

  switch (month) {
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

    default:
  }

  switch (dayOfWeek) {
    case 1:
      nameOfDay = 'Mondey';
      break;

    case 2:
      nameOfDay = 'Tuesday';
      break;

    case 3:
      nameOfDay = 'Wednesday';
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

    default:
  }

  const objDate = {
    day,
    nameDay: nameOfDay,
    month: nameOfMonth,
    year,
  };

  return objDate;
}

const convertTime = {
  sunriseTime(sunrise) {
    let convertSunriseOurs;
    let convertSunriseMinutes;

    if (fromUnixTime(sunrise).getHours() < 10) {
      convertSunriseOurs = `0${fromUnixTime(sunrise).getHours()}`;
    } else {
      convertSunriseOurs = fromUnixTime(sunrise).getHours();
    }

    if (fromUnixTime(sunrise).getMinutes() < 10) {
      convertSunriseMinutes = `${fromUnixTime(sunrise).getMinutes()}0`;
    } else {
      convertSunriseMinutes = fromUnixTime(sunrise).getMinutes();
    }

    return `${convertSunriseOurs}:${convertSunriseMinutes}`;
  },

  sunsetTime(sunset) {
    let convertSunsetOurs;
    let convertSunsetMinutes;

    if (fromUnixTime(sunset).getHours() < 10) {
      convertSunsetOurs = `0${fromUnixTime(sunset).getHours()}`;
    } else {
      convertSunsetOurs = fromUnixTime(sunset).getHours();
    }

    if (fromUnixTime(sunset).getMinutes() < 10) {
      convertSunsetMinutes = `${fromUnixTime(sunset).getMinutes()}0`;
    } else {
      convertSunsetMinutes = fromUnixTime(sunset).getMinutes();
    }

    return `${convertSunsetOurs}:${convertSunsetMinutes}`;
  },
};

export { getDate, convertTime };