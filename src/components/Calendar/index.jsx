import 'date-fns';
import React from 'react';
import Calendar from 'react-calendar';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import { colors, spacing } from '../../styles/variables';
import { space } from '../../styles/helpers';

const useStyles = makeStyles(() =>
  createStyles({
    calendar: {
      border: 'none',
      padding: `0 ${space(5)}px`,
      width: '100%',

      '& > *:focus': {
        background: 'transparent'
      }
    },

    // react-calendar__tile--active: {
    //   background: 'green'
    // }

    activeDay: {
      background: colors.mainRed,
      borderRadius: spacing.radius
    }
  })
);

export const MonthCalendar = ({ days, trackedDays }) => {
  const classes = useStyles();

  return (
    <div>
      <Calendar
        className={classes.calendar}
        tileClassName={({ date, view }) =>
          view === 'month' && trackedDays && trackedDays.includes(moment(date).format('YYYY-MM-DD'))
            ? classes.activeDay
            : null
        }
      />
    </div>
  );
};
