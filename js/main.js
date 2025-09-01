"use strict";

// wait until dom is ready
document.addEventListener("DOMContentLoaded", () => {
  // set current year in footer
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  // show date + time in footer
  const dt = document.getElementById("datetime");
  if (dt) {
    const updateTime = () => {
      const now = new Date();
      const options = {
        weekday: "long", // eg . Maanantai
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      };
      dt.textContent = now.toLocaleString("fi-FI", options);
    };
    updateTime();             // show now
    setInterval(updateTime, 1000); // uopdate time one sec
  }
});
