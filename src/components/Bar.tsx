/** @jsxImportSource theme-ui */
import React from 'react'
import { Box } from 'theme-ui'

interface Props {
    time: number,
    hour: number,
    arr: []
}

function Bar({ time, hour, arr }: Props) {
    return (
        <div className=''>
            {arr.map((val) => (
                <Box key={val} bg="intt" sx={{width:"100%",height:'12px',marginBottom: '5px'}}>x</Box>
                // <div key={val} sx={{ backgroundColor: (val <= (hour == 12 ? time % 12 : time)) ? 'red' : 'blue', width: '100%', height: '10px', marginBottom: '5px'  }}></div>
                // <div key={val} sx={{ backgroundColor: (val <= (hour == 12 ? time % 12 : time)) ? 'primary' : 'purple', width: '100%', height: '10px', marginBottom: '5px'  }}></div>
            ))
            }
        </div >
    )
}

export default Bar
// background: 'red', width: '200px', height: '10px', marginBottom: '5px' 
// (val <= (hour == 12 ? time % 12 : time)) ?