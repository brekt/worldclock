const offsets = {
    'new-york': -240,
    'new-delhi': 330,
    tokyo: 540,
    london: 0,
    paris: -60,
    beijing: 480,
    'los-angeles': -420,
};

const getTime = (cityId) => {
    const localDate = new Date();
    const offset = localDate.getTimezoneOffset() + offsets[cityId];
    return new Date(+localDate + offset * 60 * 1000);
};

// const getTime = async (city) => {
//     const url = `http://worldtimeapi.org/api/timezone/${city}`;
//     const response = await fetch(url);
//     const result = await response.json();
//     const time = new Date(result.datetime);

//     return time;
// };

export default getTime;
