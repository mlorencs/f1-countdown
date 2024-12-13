import { setCountdownData, startCountdown } from "./countdown.js";
import { scrollIntoView } from "./main.js";

let selectedGp = -1; // TODO: Set to -1 to test finished state
const currentDate = new Date(Date.now());

export function setCountdown(data, id = -1) {
    let gp;

    if (id === -1) {
        gp = data.find((gp) => currentDate < new Date(gp.date));
    } else {
        gp = data.find((gp) => gp.id === id);
    }

    if (gp) {
        const date = new Date(gp.date);

        setCountdownData(gp.name, gp.country, date);
        startCountdown(date);

        selectedGp = gp.id;
    } else {
        // TODO: Season finished
    }
}

function selectGp(data, id) {
    document.getElementById(`grand-prix-${selectedGp}`).classList.remove("selected");
    document.getElementById(`grand-prix-${id}`).classList.add("selected");

    setCountdown(data, id);
    scrollIntoView("next-weekend");
}

export function fillScheduleTable(data) {
    const rowsElement = document.getElementById("schedule-rows");

    data.forEach((gp) => {
        const rowElement = document.createElement("tr");
        rowElement.setAttribute("id", `grand-prix-${gp.id}`);
        rowElement.classList.add("schedule-row");

        if (gp.id === selectedGp) {
            rowElement.classList.add("selected");
        }

        rowElement.addEventListener("click", () => selectGp(data, gp.id));

        const date = new Date(gp.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
        });

        rowElement.innerHTML =
            "<td class='schedule-date'>" +
            date +
            "</td>" +
            "<td class='schedule-title'>" +
            "<div class='grand-prix-title'>" +
            "<img class='country-flag' alt='flag' src='" +
            gp.country +
            "' />" +
            "<span>" +
            gp.name +
            "</span>" +
            "</div>" +
            "</td>" +
            "<td class='schedule-status'>" +
            "Yet to race" +
            "</td>";

        rowsElement.appendChild(rowElement);
    });
}
