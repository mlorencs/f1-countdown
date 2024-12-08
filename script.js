const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const currentDate = new Date(Date.now());

function sortByDate(arr) {
    return arr.sort(function (d1, d2) {
        // Turn your strings into Dates, and then subtract them
        // to get a value that is either negative, positive, or zero
        return new Date(d1.date) - new Date(d2.date);
    });
}

function loadData(data, index, gpDate) {
    const gpDateOfMonth = gpDate.getDate();
    let ordinal = "th";

    if (gpDateOfMonth === 1) {
        ordinal = "st";
    } else if (gpDateOfMonth === 2) {
        ordinal = "nd";
    } else if (gpDateOfMonth === 3) {
        ordinal = "rd";
    }

    document.getElementById("gp-country").src = data[index].country;
    document.getElementById("gp-name").innerHTML = data[index].name;

    document.getElementById("date-value").innerHTML = `${gpDateOfMonth}${ordinal} ${
        months[gpDate.getMonth()]
    }`;
}

function countDown(gpDate) {
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

window.onload = async () => {
    const response = await fetch(`./assets/archive/f12025.json`);
    const data = await response.json();

    const sortedData = sortByDate(data);

    const gpIndex = sortedData.findIndex((gp) => currentDate < new Date(gp.date));

    const gpDate = new Date(sortedData[gpIndex].date);

    loadData(sortedData, gpIndex, gpDate);
    countDown(gpDate);
};
