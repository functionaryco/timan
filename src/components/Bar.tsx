/** @jsxImportSource theme-ui */
import React from 'react';

interface Props {
  time: number;
  hour: number;
  arr?: any;
}

function Bar({ time, hour, arr }: Props) {
  return (
    <div className="">
      {arr.map((val: any) => (
        // <div key={val} sx={{ backgroundColor: (val <= (hour == 12 ? time % 12 : time)) ? 'tint' : 'intt', width: '100%', height: '10px', marginBottom: '5px'  }}></div>
        <div
          key={val}
          sx={{
            bg:
              val <= (hour == 12 ? time % 12 : time) ? 'tint' : 'intt',
            width: '100%',
            height: '10px',
            marginBottom: '5px',
          }}
        ></div>
      ))}
    </div>
  );
}

export default Bar;
// background: 'red', width: '200px', height: '10px', marginBottom: '5px'
// (val <= (hour == 12 ? time % 12 : time)) ?
