import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import { colors } from '../../styles/variables';
import { space } from '../../styles/helpers';

const useStyles = makeStyles(() =>
  createStyles({
    habitsList: {
      listStyleType: 'none',
      padding: '0',
      width: '100%',
      height: `${space(78) + 2}px`,
      overflow: 'scroll',
      margin: 0
    },
    habit: {
      padding: `${space(1)}px`,

      '& svg': {
        margin: `0 ${space(1)}px 0}`,
        cursor: 'pointer',

        '&:first-child': {
          color: colors.navy
        },

        '&:last-child': {
          color: colors.mainRed
        }
      }
    }
  })
);

export const HabitsList = ({ habitsList, deleteHabit, onEditButtonClick }) => {
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="space-between">
      <ul className={classes.habitsList}>
        {habitsList.map((habit, index) => (
          <li key={index} className={classes.habit}>
            <Box display="flex" justifyContent="space-between" flex="1">
              <Box display="flex" flexDirection="row" justifyContent="space-around">
                <Typography variant="subtitle1">{habit.title}</Typography>
              </Box>
              <div>
                <Tooltip title="edit">
                  <EditIcon variant="contained" onClick={() => onEditButtonClick(habit.id)} />
                </Tooltip>
                <Tooltip title="delete">
                  <DeleteIcon variant="contained" onClick={() => deleteHabit(index)} />
                </Tooltip>
              </div>
            </Box>
            <Typography variant="body2">{habit.description}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
};
