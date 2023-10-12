/** @jsxImportSource theme-ui */
import React from 'react';
import { Box } from 'theme-ui';

interface Props {
  arr?: any;
  startHour: any;
  endHour: any;
  startTime:any;
  endTime:any;
  time: any;
  minutes:any;
}

function Bar({ arr, startHour, endHour, startTime,endTime, time, minutes }: Props) {

let currentTime = (time * 60 ) + minutes

let startHourToMinute = startHour * 60;
let endHourToMinutes = endHour * 60

var totalMinutes = 60;
var barHeightPercentage = (minutes / totalMinutes) * 100;

const startTimeParts = startTime.split(":");
const startMinutes = parseInt(startTimeParts[1]);

const endTimeParts = endTime.split(":");
const endMinutes = parseInt(endTimeParts[1]);
 

  const totalBars = arr.length;
  let timeRange = 0
  let timeInterval = 0;

  if (endHour === 12) {
    timeRange = (24 - startHour) * 60 + endMinutes -startMinutes;
  } else {
    timeRange = (endHour - startHour) * 60 + endMinutes -startMinutes;
  }

  timeInterval = timeRange / totalBars;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '66px',
        height: '400px',
        '@media screen and (max-width: 720px)': {
          marginTop: '36px !important',
          height: '60vh !important',
          flexDirection: 'column',
        },
      }}
    >
       {arr?.map((val: any, index: number) => {
        const barStartTime = startHourToMinute + index * timeInterval;
        
        const barEndTime = startHourToMinute + (index + 1) * timeInterval;
        const isActive = barStartTime <= currentTime && currentTime < barEndTime;
        const isPassed = barEndTime <= currentTime;

        return (
          <Box
            key={val}
            sx={{
              bg: isPassed ? 'secondary' : 'primary',
              width: '18px',
              marginBottom: '5px',
              borderRadius: '4px',
              height: '100%',
              background: isActive
                ? `linear-gradient(to top, var(--theme-ui-colors-secondary) ${barHeightPercentage}%, var(--theme-ui-colors-primary) 0)`
                : isPassed
                ? 'secondary' // Set the background for passed bars to 'secondary' color
                : 'primary',
              '@media screen and (max-width: 720px)': {
                width: '100% !important',
                height: '10px !important',
              },
            }}
          ></Box>

        );
      })}
    </Box>
  );
}

export default Bar;