import React from 'react';
import { Box } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import moment from 'moment';

export const DaysOverview = ({days, trackedDays}) => {
  
  const isChecked = day => trackedDays && trackedDays.includes(day.format('YYYY-MM-DD'));
  const isToday = day => day.isSame(moment(), "day");
  const formatDate = day => day.format('ddd');

  return (
    <div>
      <ul style={{padding: 0, display: 'table', width: '100%'}}>
        {days.map((day, index) => (
          <li key={index} style={{display: 'table-cell', color: isToday(day) ? 'red' : 'black'}}>
          <Box display="flex" flexDirection="column">
            <Checkbox disabled={true} checked={isChecked(day)} />
            <span style={{textAlign: 'center'}}>{formatDate(day)}</span>
          </Box>
          </li>
        ))}
      </ul>
    </div>
  );
}