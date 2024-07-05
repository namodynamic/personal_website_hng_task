const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDay = daysOfWeek[new Date().getDay()];
document.querySelector("[data-testid='currentDay']").textContent = currentDay;

function currentTimeUTC() {
  const now = new Date();
  const hours = now.getUTCHours().toString().padStart(2, "0");
  const minutes = now.getUTCMinutes().toString().padStart(2, "0");
  const seconds = now.getUTCSeconds().toString().padStart(2, "0");

  const formattedTime = `${hours}:${minutes}:${seconds}`;

  document.querySelector("[data-testid='currentTimeUTC']").textContent =
    formattedTime;
}

currentTimeUTC();
setInterval(currentTimeUTC, 1000);
