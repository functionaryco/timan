/** @jsxImportSource theme-ui */
import React from 'react';
import { Box } from 'theme-ui';

interface Props {
  hour: any;
  arr?: any;
  division: any;
}

function Bar({ hour, arr, division }: Props) {
  var nofs = (hour * division) / 100;
  return (
    <Box style={{ display: 'flex', justifyContent: 'space-between', marginTop: '66px', height: '400px' }}>
      {arr?.map((val: any) => (
        <Box
          key={val}
          sx={{
            bg: val <= (nofs) ? 'primary' : 'secondary',
            width: '18px',
            marginBottom: '5px',
            borderRadius: '4px'
          }}
        ></Box>
      ))}
    </Box>
  );
}

export default Bar;

