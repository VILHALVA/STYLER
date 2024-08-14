function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const nextYear = currentYear + 1;
    const newYear = new Date(`January 1, ${nextYear} 00:00:00`);
    
    const timeDifference = newYear - now;

    const secondsTotal = Math.floor(timeDifference / 1000);
    const minutesTotal = Math.floor(secondsTotal / 60);
    const hoursTotal = Math.floor(minutesTotal / 60);
    const daysTotal = Math.floor(hoursTotal / 24);
    const weeksTotal = Math.floor(daysTotal / 7);
    const monthsTotal = Math.floor(daysTotal / 30);

    document.getElementById('currentDateTime').innerHTML = `TIME: ${now.toLocaleString()}`;
    document.getElementById('months').innerText = monthsTotal;
    document.getElementById('weeks').innerText = weeksTotal;
    document.getElementById('days').innerText = daysTotal;
    document.getElementById('hours').innerText = hoursTotal;
    document.getElementById('minutes').innerText = minutesTotal;
    document.getElementById('seconds').innerText = secondsTotal;
}

setInterval(updateCountdown, 1000);
