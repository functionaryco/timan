import React from 'react'
import { Box, Text } from 'theme-ui'

interface Props {
    time: number,
    min: number,
    hour: any
}

function Time({ time, min, hour }: Props) {

    return (
        <Box style={{ display: 'flex', flexDirection: 'column' }}>
            <Text>{time}:{min} Time</Text>
            <Text>{hour} Hours Format</Text>
        </Box>
    )
}

export default Time