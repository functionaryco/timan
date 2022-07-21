import React from 'react'
import { Box, Text } from 'theme-ui'

interface Props {
    time: number,
    min: number,
    division: any
}

function Time({ time, min, division }: Props) {

    return (
        <Box style={{ display: 'flex', flexDirection: 'column' }}>
            <Text>{time}:{min} Time</Text>
            <Text>{division} Division</Text>
        </Box>
    )
}

export default Time