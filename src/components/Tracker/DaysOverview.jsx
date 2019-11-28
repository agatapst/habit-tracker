import React from 'react';
import { Box } from '@material-ui/core';
import moment from 'moment';
import { CustomCheckbox } from '../Checkbox';
import { colors } from '../../styles/variables';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    weekdaysList: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      padding: 0,
      listStyleType: 'none',

      '& > *': {
        width: '14%'
      }
    },
    day: {
      textAlign: 'center',
      color: colors.darkRed
    },
    weekday: {
      textAlign: 'center',
      color: 'grey'
    }
  })
);

export const DaysOverview = ({ days, trackedDays }) => {
  const classes = useStyles();
  const isChecked = day => trackedDays && trackedDays.includes(day.format('YYYY-MM-DD'));
  const isToday = day => day.isSame(moment(), 'day');

  return (
    <div style={{ background: colors.beige, borderRadius: '20px' }}>
      <ul className={classes.weekdaysList}>
        {days.map((day, index) => (
          <li key={index} style={{ color: isToday(day) ? 'red' : 'black' }}>
            <Box display="flex" flexDirection="column">
              <CustomCheckbox disabled={true} checked={isChecked(day)} />
            </Box>
          </li>
        ))}
      </ul>
    </div>
  );
};
