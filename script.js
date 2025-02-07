const countdownDate = new Date("May 1, 2025 00:00:00").getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const difference = countdownDate - now;

    if (difference <= 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "We're live!";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}, 1000);