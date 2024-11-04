const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    // '+ 90' takes care of the hand's 90 degrees rotation css style
    const secondsToDegrees = (seconds / 60) * 360 + 90;
    // Disable transition at 0 to prevent "glitch"
    if (seconds === 0) {
        secondHand.style.transition = 'none';
    } else {
        secondHand.style.transition = '';
    }
    // ensures the hand makes a full circle
    secondHand.style.transform = `rotate(${secondsToDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesToDegrees = (minutes / 60) * 360 + 90;
    // Disable transition at 0 to prevent "glitch"
    if (minutes === 0) {
        minuteHand.style.transition = 'none';
    } else {
        minuteHand.style.transition = '';
    }
    minuteHand.style.transform = `rotate(${minutesToDegrees}deg)`;

    const hours = now.getHours();
    const hoursToDegrees = (hours / 12) * 360 + 90;
    // Disable transition at 0 to prevent "glitch"
    if (hours % 12 === 0) {
        hourHand.style.transition = 'none';
    } else {
        hourHand.style.transition = '';
    }
    hourHand.style.transform = `rotate(${hoursToDegrees}deg)`;
}

setInterval(setDate, 1000);
