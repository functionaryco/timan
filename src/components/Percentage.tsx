import React from 'react'
import { Container, Text } from 'theme-ui';

interface Props {
    time: number,
    hour: number,
}

function Percentage({ time, hour }: Props) {

    var per = hour == 12 ? ((time % 12) / hour) : (time / hour);
    var perc = (Math.round(per * 100));
    return (
        <Text>{perc}% Finish</Text>
    )
}

export default Percentage