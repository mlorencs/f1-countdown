import { setCountdown, fillScheduleTable } from "./schedule.js";

const fullScheduleBtn = document.getElementById("full-schedule-btn");

// Helper functions

function sortByDate(arr) {
    return arr.sort(function (d1, d2) {
        // Turn your strings into Dates, and then subtract them
        // to get a value that is either negative, positive, or zero
        return new Date(d1.date) - new Date(d2.date);
    });
}

export function scrollIntoView(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Event handlers

fullScheduleBtn.addEventListener("click", () => scrollIntoView("full-schedule"));

window.onload = async () => {
    const response = await fetch(`./assets/archive/f12025.json`);
    const data = await response.json();

    const sortedData = sortByDate(data);

    // schedule.js
    setCountdown(sortedData);
    fillScheduleTable(sortedData);
};
