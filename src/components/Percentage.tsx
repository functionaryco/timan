import React from 'react'

interface Props {
    time: number,
    hour: number,
}

function Percentage({ time, hour }: Props) {

    var per = hour == 12 ? ((time % 12) / hour) : (time / hour);
    var perc = (Math.round(per * 100));
    return (
        <div>
            <h1>{perc}% Finish</h1>
        </div>
    )
}

export default Percentage