import React from 'react';
import { Box } from '@material-ui/core';
import moment from 'moment';
import { colors, spacing } from '../../styles/variables';
import { space } from '../../styles/helpers';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    weekdaysCalendarList: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      padding: 0,
      listStyleType: 'none',
      margin: `${space(2)}px 0`,

      '& > *': {
        width: '14%',
        borderRadius: spacing.radiusBig,
        boxShadow: '10px 5px 10px black'
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

export const WeekView = ({ days }) => {
  const classes = useStyles();
  const isToday = day => day.isSame(moment(), 'day');
  const formatDateWeekday = day => day.format('ddd');
  const formatDate = day => day.format('DD');

  return (
    <>
      <ul className={classes.weekdaysCalendarList}>
        {days &&
          days.map((day, index) => (
            <li
              key={index}
              style={{
                backgroundColor: isToday(day) ? colors.beige : 'transparent',
                boxShadow: isToday(day) ? '0 0 10px grey' : 'none'
              }}
            >
              <Box display="flex" flexDirection="column">
                <span className={classes.weekday}>{formatDateWeekday(day)}</span>
                <span className={classes.day}>{formatDate(day)}</span>
              </Box>
            </li>
          ))}
      </ul>
    </>
  );
};
