const offsets = {
    'new-york': -240,
    'new-delhi': 330,
    tokyo: 540,
    london: 0,
    paris: -60,
    beijing: 480,
    'los-angeles': -420,
};

const getTimeByCity = (city) => {
    const localDate = new Date();
    const offset = localDate.getTimezoneOffset() + offsets[city];

    return new Date(+localDate + offset * 60 * 1000);
};

const parseTime = (time) => {
    let hours = time.getHours();
    if (hours > 12) {
        hours = hours % 12;
    }

    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    return {
        hours,
        minutes,
        seconds,
    };
};

const formatTime = (time) => {
    const hours = time.hours.toString();
    let minutes = time.minutes.toString();
    let seconds = time.seconds.toString();

    if (minutes.length === 1) {
        minutes = `0${minutes}`;
    }

    if (seconds.length === 1) {
        seconds = `0${seconds}`;
    }

    return `${hours}:${minutes}:${seconds}`;
};

export { getTimeByCity, parseTime, formatTime };