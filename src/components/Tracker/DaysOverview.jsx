import React from 'react';
import { Box } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import moment from 'moment';
import { CustomCheckbox, CustomStyles } from '../Checkbox'
import { colors } from '../../styles/variables';

export const DaysOverview = ({days, trackedDays}) => {
  
  const isChecked = day => trackedDays && trackedDays.includes(day.format('YYYY-MM-DD'));
  const isToday = day => day.isSame(moment(), "day");
  const formatDate = day => day.format('ddd');

  return (
    <div style={{background: colors.mainRed, borderRadius: '20px'}}>
      <ul style={{padding: 0, display: 'table', width: '100%'}}>
        {days.map((day, index) => (
          <li key={index} style={{display: 'table-cell', color: isToday(day) ? 'red' : 'black'}}>
          <Box display="flex" flexDirection="column">
            <CustomCheckbox disabled={true} checked={isChecked(day)} />
          </Box>
          </li>
        ))}
      </ul>
    </div>
  );
}