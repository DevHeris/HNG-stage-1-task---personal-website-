document.addEventListener("DOMContentLoaded", () => {
  // Update current time in UTC
  const currentTimeUTC = document.querySelector(
    '[data-testid="currentTimeUTC"]'
  );
  const currentDay = document.querySelector('[data-testid="currentDay"]');

  function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString().split(" ")[4];
    const dayOfWeek = now.toLocaleDateString("en-US", { weekday: "long" });

    currentTimeUTC.textContent = `UTC Time: ${utcTime}`;
    currentDay.textContent = `Day of the Week: ${dayOfWeek}`;
  }

  updateTime();
  setInterval(updateTime, 1000); // Update time every second
});
