import React from 'react';
import useClock from './useClock';

function App() {
    const time = useClock('new-york');

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

    return (
        <div className='App'>
            <div className='clock-wrapper'>{formatTime(parseTime(time))}</div>
        </div>
    );
}

export default App;
