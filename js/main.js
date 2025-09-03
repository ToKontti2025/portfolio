"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // footer year + clock
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  const dt = document.getElementById("datetime");
  if (dt) {
    const updateTime = () => {
      const now = new Date();
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      };
      dt.textContent = now.toLocaleString("fi-FI", options);
    };
    updateTime();
    setInterval(updateTime, 1000); // tick every sec
  }

  // header height for scroll offset
  const header = document.querySelector(".site-header");
  const headerHeight = header ? header.offsetHeight : 0;
  document.documentElement.style.setProperty("--header-h", headerHeight + "px");

  const sections = Array.from(document.querySelectorAll("main section"));
  const navLinks = Array.from(document.querySelectorAll(".site-header .nav a"));

  // when clicking nav -> scroll smooth + highlight card
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (!href || !href.startsWith("#")) return;

    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (!target) return;

      // reset active states
      navLinks.forEach(l => l.classList.remove("active"));
      sections.forEach(s => s.classList.remove("active"));

      // set new active
      link.classList.add("active");
      target.classList.add("active");

      // smooth scroll with offset
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 12;
      window.scrollTo({ top, behavior: "smooth" });

      // update url hash
      history.replaceState(null, "", href);
    });
  });
});
