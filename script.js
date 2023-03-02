// Insert JSON data here...
const data = [
  {
    name: "Bahrain GP",
    country: "assets/flags/bh.svg",
    date: "05 Mar 2023 15:00:00 GMT",
  },
  {
    name: "Saudi Arabian Grand Prix",
    country: "assets/flags/sa.svg",
    date: "19 Mar 2023 17:00:00 GMT",
  },
  {
    name: "Australian GP",
    country: "assets/flags/au.svg",
    date: "02 Apr 2023 06:00:00 GMT",
  },
  {
    name: "Azerbaijan GP",
    country: "assets/flags/az.svg",
    date: "30 Apr 2023 12:00:00 GMT",
  },
  {
    name: "Miami Grand Prix",
    country: "assets/flags/us.svg",
    date: "07 May 2023 20:30:00 GMT",
  },
  {
    name: "Emilia Romagna Grand Prix",
    country: "assets/flags/it.svg",
    date: "21 May 2023 14:00:00 GMT",
  },
  {
    name: "Monaco GP",
    country: "assets/flags/mc.svg",
    date: "28 May 2023 14:00:00 GMT",
  },
  {
    name: "Spanish GP",
    country: "assets/flags/es.svg",
    date: "04 Jun 2023 14:00:00 GMT",
  },
  {
    name: "Canadian GP",
    country: "assets/flags/ca.svg",
    date: "18 Jun 2023 19:00:00 GMT",
  },
  {
    name: "Austrian GP",
    country: "assets/flags/at.svg",
    date: "02 Jul 2023 14:00:00 GMT",
  },
  {
    name: "British GP",
    country: "assets/flags/gb.svg",
    date: "09 Jul 2023 15:00:00 GMT",
  },
  {
    name: "Hungarian GP",
    country: "assets/flags/hu.svg",
    date: "23 Jul 2023 14:00:00 GMT",
  },
  {
    name: "Belgian GP",
    country: "assets/flags/be.svg",
    date: "30 Jul 2023 14:00:00 GMT",
  },
  {
    name: "Dutch Grand Prix",
    country: "assets/flags/nl.svg",
    date: "27 Aug 2023 14:00:00 GMT",
  },
  {
    name: "Italian GP",
    country: "assets/flags/it.svg",
    date: "03 Sep 2023 14:00:00 GMT",
  },
  {
    name: "Singapore GP",
    country: "assets/flags/sg.svg",
    date: "17 Sep 2023 13:00:00 GMT",
  },
  {
    name: "Japanese GP",
    country: "assets/flags/jp.svg",
    date: "24 Sep 2023 06:00:00 GMT",
  },
  {
    name: "Qatar Grand Prix",
    country: "assets/flags/qa.svg",
    date: "08 Oct 2023 15:00:00 GMT",
  },
  {
    name: "United States GP",
    country: "assets/flags/us.svg",
    date: "22 Oct 2023 20:00:00 GMT",
  },
  {
    name: "Mexican GP",
    country: "assets/flags/mx.svg",
    date: "29 Oct 2023 20:00:00 GMT",
  },
  {
    name: "Brazlilian GP",
    country: "assets/flags/br.svg",
    date: "05 Nov 2023 17:00:00 GMT",
  },
  {
    name: "Las Vegas Grand Prix",
    country: "assets/flags/us.svg",
    date: "18 Nov 2023 06:00:00 GMT",
  },
  {
    name: "Abu Dhabi GP",
    country: "assets/flags/ae.svg",
    date: "26 Nov 2023 13:00:00 GMT",
  },
];

function sortByDate(arr) {
  return arr.sort(function (d1, d2) {
    // Turn your strings into Dates, and then subtract them
    // to get a value that is either negative, positive, or zero
    return new Date(d1.date) - new Date(d2.date);
  });
}

const sortedData = sortByDate(data);

const currentDate = new Date(Date.now());

const gpIndex = sortedData.findIndex((gp) => currentDate < new Date(gp.date));

const gpDate = new Date(sortedData[gpIndex].date);

document.getElementById(
  "title"
).innerHTML = `F1 ${currentDate.getFullYear()} Season`;

document.getElementById("gp-country").src = sortedData[gpIndex].country;
document.getElementById("gp-name").innerHTML = sortedData[gpIndex].name;

function countDown() {
  let interval = setInterval(function () {
    const now = new Date().getTime(); // get today's date and time

    const distance = gpDate - now; // find the distance between now and the count down date

    // Time calculation for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    let daysStr = days.toString();
    let hoursStr = hours.toString();
    let minutesStr = minutes.toString();
    let secondsStr = seconds.toString();

    if (days < 10) {
      daysStr = `0${daysStr}`;
    }
    if (hours < 10) {
      hoursStr = `0${hoursStr}`;
    }
    if (minutes < 10) {
      minutesStr = `0${minutesStr}`;
    }
    if (seconds < 10) {
      secondsStr = `0${secondsStr}`;
    }

    if (distance < 0) {
      clearInterval(interval);

      daysStr = "00";
      hoursStr = "00";
      minutesStr = "00";
      secondsStr = "00";
    }

    // Display the result...
    document.getElementById("days-value").innerHTML = daysStr;
    document.getElementById("hours-value").innerHTML = hoursStr;
    document.getElementById("minutes-value").innerHTML = minutesStr;
    document.getElementById("seconds-value").innerHTML = secondsStr;
  }, 1000);
}

window.onload = countDown();
