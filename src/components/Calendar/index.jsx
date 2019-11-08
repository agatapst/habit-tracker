
import 'date-fns';
import React, { useState } from 'react';
import Calendar from 'react-calendar';

export const MonthCalendar = () => {

    const [date, setDate] = useState(new Date())

        return (
            <div>
                <Calendar
                value={date}
                onChange={setDate}
                />
            </div>
        );
}
