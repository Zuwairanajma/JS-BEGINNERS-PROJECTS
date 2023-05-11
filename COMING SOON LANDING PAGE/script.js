const daysE1 = document.querySelector(".days"),
hoursE1 = document.querySelector(".hours"),
minutesE1 = document.querySelector(".minutes"),
secondsE1 = document.querySelector(".seconds"),
h1 = document.querySelector("h1");

const countTo = "1 April 2023"

const c = setInterval(() => {
    const currentDate = new Date();
    const endDate = new Date(countTo);
    const totalSeconds = (endDate - currentDate)/1000;

    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600) % 24;
    const minutes = Math.floor(totalSeconds/60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysE1.innerHTML = `${days}`;
    hoursE1.innerHTML = `${format(hours)}`;
    minutesE1.innerHTML = `${format(minutes)}`;
    secondsE1.innerHTML = `${format(seconds)}`;

    if (totalSeconds < 0) {
        clearInterval(c);
        h1.textContent = "Product Launch Begins";
    }
});

function format(count) {
    return count < 10 ? `0${count}` : count;
};