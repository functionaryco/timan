import React from 'react'
import { Container, Text } from 'theme-ui';

interface Props {
    hour: any,
}

function Percentage({ hour }: Props) {

    return (
        <Text>{hour}% Finish</Text>
    )
}

export default Percentage