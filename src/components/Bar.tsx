/** @jsxImportSource theme-ui */
import React from 'react';
import { Box } from 'theme-ui';

interface Props {
  time: number;
  hour: number;
  arr?: any;
}

function Bar({ time, hour, arr }: Props) {
  return (
    <Box>
      {arr?.map((val: any) => (
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
}

export default Bar;
// background: 'red', width: '200px', height: '10px', marginBottom: '5px'
// (val <= (hour == 12 ? time % 12 : time)) ?
