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

let interval;

export function setCountdownData(name, country, d) {
    let gpName = name;
    const date = d.getDate();
    let ordinal = "th";

    if (date === 1) {
        ordinal = "st";
    } else if (date === 2) {
        ordinal = "nd";
    } else if (date === 3) {
        ordinal = "rd";
    }

    if (gpName.endsWith("*")) {
        gpName = `${gpName} (Sprint Weekend)`;
    }

    document.getElementById("gp-country").src = country;
    document.getElementById("gp-name").innerHTML = gpName;

    document.getElementById("date-value").innerHTML = `${date}${ordinal} ${months[d.getMonth()]}`;
}

export function startCountdown(d) {
    clearInterval(interval);

    interval = setInterval(function () {
        const now = new Date().getTime(); // get today's date and time

        const distance = d - now; // find the distance between now and the count down date

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
