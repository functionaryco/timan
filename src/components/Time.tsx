import React from 'react'

interface Props {
    time: number,
    min: number,
    hour: number
}

function Time({ time, min, hour }: Props) {

    return (
        <div className='flex gap-4'>
            <h1 style={{ marginBottom: "0px" }}>{time}:{min} Time</h1>
            <h4 style={{ marginTop: "0px" }}>{hour} Hours Format</h4>
        </div>
    )
}

export default Time