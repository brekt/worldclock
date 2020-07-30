import React, { useState, useEffect } from 'react';
import { getTimeByCity, formatTime, parseTime } from './time-helpers';

function Clock(props) {

    const [time, setTime] = useState(getTimeByCity(props.city));

    useEffect(() => {
        const id = setInterval(() => {
            setTime(() => getTimeByCity(props.city));
        }, 1000);
        return () => clearInterval(id);
    }, [props.city]);

    return (
        <div className='clock-wrapper'>
            <h1>{props.prettyName}</h1>
            <div>{formatTime(parseTime(time))}</div>
        </div>
    );
}

export default Clock;
