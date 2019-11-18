
import 'date-fns';
import React from 'react';
import Calendar from 'react-calendar';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import { colors } from '../../styles/variables';

const useStyles = makeStyles(() =>
  createStyles({
    calendar: {
      border: 'none',
      padding: '0 20px',
      width: '100%',

      '&:focus': {
        background: 'transparent'
      }
    },
    activeDay: {
      background: colors.mainRed,
      borderRadius: 5
    }
  }),
);

export const MonthCalendar = ({days, trackedDays}) => {

    const classes = useStyles();

        return (
            <div>
                <Calendar
                    className={classes.calendar}
                    tileClassName={({ date, view }) =>
                    view === "month" &&
                    trackedDays && trackedDays.includes(moment(date).format("YYYY-MM-DD"))
                        ? classes.activeDay
                        : null
                    }
                />
            </div>
        );
}
