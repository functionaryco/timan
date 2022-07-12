/** @jsxImportSource theme-ui */
<<<<<<< HEAD
import React from 'react'
import { Box } from 'theme-ui'
=======
import React from 'react';
import { Box } from 'theme-ui';
>>>>>>> b8c037ac2b176e7895b44cba10e45b0d45073cf7

interface Props {
  time: number;
  hour: number;
  arr?: any;
}

function Bar({ time, hour, arr }: Props) {
<<<<<<< HEAD
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
=======
  return (
    <Box>
      {arr.map((val: any) => (
        // <div key={val} sx={{ backgroundColor: (val <= (hour == 12 ? time % 12 : time)) ? 'tint' : 'intt', width: '100%', height: '10px', marginBottom: '5px'  }}></div>
        <Box
          key={val}
          sx={{
            borderRadius: '2px',
            bg: val <= (hour == 12 ? time % 12 : time) ? 'primary' : 'secondary',
            width: '100%',
            height: '10px',
            marginBottom: '5px',
          }}
        ></Box>
      ))}
    </Box>
  );
>>>>>>> b8c037ac2b176e7895b44cba10e45b0d45073cf7
}

export default Bar;
// background: 'red', width: '200px', height: '10px', marginBottom: '5px'
// (val <= (hour == 12 ? time % 12 : time)) ?
