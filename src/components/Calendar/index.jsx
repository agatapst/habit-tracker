
import 'date-fns';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import { colors } from '../../styles/variables';

const useStyles = makeStyles(() =>
  createStyles({
    calendar: {
      border: 'none',
      margin: '0 auto',
    },
    activeDay: {
      background: colors.mainRed,
      borderRadius: 5

    }
  }),
);

export const MonthCalendar = ({days, trackedDays}) => {

    const classes = useStyles();
    const [date, setDate] = useState(new Date())

    // const trackDates = trackedDays.map(day => new Date(day))

        return (
            <div>
                <Calendar
                    className={classes.calendar}
                    tileClassName={({ date, view }) =>
                    view === "month" &&
                    trackedDays.includes(moment(date).format("YYYY-MM-DD"))
                        ? classes.activeDay
                        : null
                    }
                />
            </div>
        );
}
