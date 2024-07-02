 // Get the current time in UTC
 const currentTimeUTC = new Date().toLocaleString("en-US", { timeZone: "UTC" });
 document.querySelector("[data-testid='currentTimeUTC']").textContent = currentTimeUTC;

 // Get the current day of the week
 const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 const currentDay = daysOfWeek[new Date().getDay()];
 document.querySelector("[data-testid='currentDay']").textContent = currentDay;