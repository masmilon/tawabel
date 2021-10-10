const calcDaysPassed = (now, future) => {
  const diff = new Date(future - now);

  const years = diff.getUTCFullYear() - 1970; // Gives difference as year
  const months = diff.getUTCMonth(); // Gives month count of difference
  const days = diff.getUTCDate() - 1; // Gives day count of difference
  const hours = diff.getUTCHours(); // Gives day count of difference
  const minutes = diff.getUTCMinutes(); // Gives day count of difference
  const seconds = diff.getUTCSeconds(); // Gives day count of difference

  return {
    months: months,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
};

const datePritter = (date) => {
  let newDate;
  if (date < 10) {
    newDate = "0" + date;
  } else {
    return date;
  }
  return newDate;
};

function clock() {
  // Visible Element
  const el = document.querySelector(".custom-page-top");
  const r = el.closest(`div[style="display: none; visibility: hidden"]`);
  r.style.display = "block";
  r.style.visibility = "visible";

  // Select Element
  const days = document.querySelector(".custom-page-top__days");
  const hours = document.querySelector(".custom-page-top__hours");
  const minutes = document.querySelector(".custom-page-top__minutes");
  const seconds = document.querySelector(".custom-page-top__seconds");

  // input Date
  const future = new Date(
    parseInt("2021"),
    parseInt("03"),
    parseInt("27"),
    parseInt("8"),
    parseInt("53")
  );

  // Main Program

  const timeRemaining = setInterval(() => {
    const now = new Date();
    const result = future.getTime() - now;
    if (result > 0) {
      const fullRestTime = calcDaysPassed(now, future);
      seconds.textContent = datePritter(fullRestTime.seconds);
      minutes.textContent = datePritter(fullRestTime.minutes);
      hours.textContent = datePritter(fullRestTime.hours);
      days.textContent = datePritter(fullRestTime.days);
    } else {
      console.log("Time end");
      clearInterval(timeRemaining);
    }
  }, 1000);
}

// setTimeout(() => {
//   const customTopPage = document.querySelector(".custom-page-top");
//   customTopPage.style.display = "none";
// }, 5000);

clock();
