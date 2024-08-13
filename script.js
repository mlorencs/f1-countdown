const data = [
    {
        name: "Bahrain GP",
        country: "assets/flags/4x3/bh.svg",
        date: "02 Mar 2024 15:00:00 GMT",
    },
    {
        name: "Saudi Arabian Grand Prix",
        country: "assets/flags/4x3/sa.svg",
        date: "09 Mar 2024 17:00:00 GMT",
    },
    {
        name: "Australian GP",
        country: "assets/flags/4x3/au.svg",
        date: "24 Mar 2024 04:00:00 GMT",
    },
    {
        name: "Japanese GP",
        country: "assets/flags/4x3/jp.svg",
        date: "07 Apr 2024 06:00:00 GMT",
    },
    {
        name: "Chinese GP",
        country: "assets/flags/4x3/cn.svg",
        date: "21 Apr 2024 08:00:00 GMT",
    },
    {
        name: "Miami Grand Prix",
        country: "assets/flags/4x3/us.svg",
        date: "05 May 2024 21:00:00 GMT",
    },
    {
        name: "Emilia Romagna Grand Prix",
        country: "assets/flags/4x3/it.svg",
        date: "19 May 2024 14:00:00 GMT",
    },
    {
        name: "Monaco GP",
        country: "assets/flags/4x3/mc.svg",
        date: "26 May 2024 14:00:00 GMT",
    },
    {
        name: "Canadian GP",
        country: "assets/flags/4x3/ca.svg",
        date: "09 Jun 2024 19:00:00 GMT",
    },
    {
        name: "Spanish GP",
        country: "assets/flags/4x3/es.svg",
        date: "23 Jun 2024 14:00:00 GMT",
    },
    {
        name: "Austrian GP",
        country: "assets/flags/4x3/at.svg",
        date: "30 Jun 2024 14:00:00 GMT",
    },
    {
        name: "British GP",
        country: "assets/flags/4x3/gb.svg",
        date: "07 Jul 2024 15:00:00 GMT",
    },
    {
        name: "Hungarian GP",
        country: "assets/flags/4x3/hu.svg",
        date: "21 Jul 2024 14:00:00 GMT",
    },
    {
        name: "Belgian GP",
        country: "assets/flags/4x3/be.svg",
        date: "28 Jul 2024 14:00:00 GMT",
    },
    {
        name: "Dutch Grand Prix",
        country: "assets/flags/nl.svg",
        date: "25 Aug 2024 14:00:00 GMT",
    },
    {
        name: "Italian GP",
        country: "assets/flags/4x3/it.svg",
        date: "01 Sep 2024 14:00:00 GMT",
    },
    {
        name: "Azerbaijan GP",
        country: "assets/flags/4x3/az.svg",
        date: "15 Sep 2024 12:00:00 GMT",
    },
    {
        name: "Singapore GP",
        country: "assets/flags/4x3/sg.svg",
        date: "22 Sep 2024 13:00:00 GMT",
    },
    {
        name: "United States GP",
        country: "assets/flags/4x3/us.svg",
        date: "20 Oct 2024 20:00:00 GMT",
    },
    {
        name: "Mexican GP",
        country: "assets/flags/4x3/mx.svg",
        date: "27 Oct 2024 20:00:00 GMT",
    },
    {
        name: "Brazlilian GP",
        country: "assets/flags/4x3/br.svg",
        date: "03 Nov 2024 17:00:00 GMT",
    },
    {
        name: "Las Vegas GP",
        country: "assets/flags/4x3/us.svg",
        date: "24 Nov 2024 06:00:00 GMT",
    },
    {
        name: "Qatar Grand Prix",
        country: "assets/flags/4x3/qa.svg",
        date: "01 Dec 2024 17:00:00 GMT",
    },
    {
        name: "Abu Dhabi GP",
        country: "assets/flags/4x3/ae.svg",
        date: "08 Dec 2024 13:00:00 GMT",
    },
];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const currentDate = new Date(Date.now());
const currentYear = currentDate.getFullYear();

function sortByDate(arr) {
    return arr.sort(function (d1, d2) {
        // Turn your strings into Dates, and then subtract them
        // to get a value that is either negative, positive, or zero
        return new Date(d1.date) - new Date(d2.date);
    });
}

// const data = await fetch(`./assets/archive/f1${currentYear}.json`);

const sortedData = sortByDate(data);

const gpIndex = sortedData.findIndex((gp) => currentDate < new Date(gp.date));

const gpDate = new Date(sortedData[gpIndex].date);

const gpDateOfMonth = gpDate.getDate();
let ordinal = "th";

if (gpDateOfMonth === 1) {
    ordinal = "st";
} else if (gpDateOfMonth === 2) {
    ordinal = "nd";
} else if (gpDateOfMonth === 3) {
    ordinal = "rd";
}

document.getElementsByTagName("body")[0].style.backgroundImage = `url(assets/img/f1_constructors_${currentYear - 1}.jpg)`;

document.getElementById("title").innerHTML = `F1 ${currentYear} Season`;

document.getElementById("gp-country").src = sortedData[gpIndex].country;
document.getElementById("gp-name").innerHTML = sortedData[gpIndex].name;

document.getElementById("date-value").innerHTML = `${gpDateOfMonth}${ordinal} ${months[gpDate.getMonth()]}`;

function countDown() {
    let interval = setInterval(function () {
        const now = new Date().getTime(); // get today's date and time

        const distance = gpDate - now; // find the distance between now and the count down date

        // Time calculation for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
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
