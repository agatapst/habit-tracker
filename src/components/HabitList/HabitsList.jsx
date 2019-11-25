/* eslint-disable import/prefer-default-export */
import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Tooltip from "@material-ui/core/Tooltip";
import { colors } from "../../styles/variables";

const useStyles = makeStyles(theme =>
  createStyles({
    habitsList: {
      listStyleType: "none",
      padding: "0",
      width: "100%",
      height: 250,
      overflow: "scroll",
      margin: 0
    },
    habit: {
      padding: 5,

      "& svg": {
        marginRight: 5,
        cursor: "pointer",

        "&:first-child": {
          color: colors.navy
        },

        "&:last-child": {
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
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-around"
              >
                {/* <CategoryIcon category={habit.category} /> */}
                <Typography variant="subtitle1">{habit.title}</Typography>
              </Box>
              <div>
                <Tooltip title="edit">
                  <EditIcon
                    variant="contained"
                    color="primary"
                    onClick={() => onEditButtonClick(habit.id)}
                  />
                </Tooltip>
                <Tooltip title="delete">
                  <DeleteIcon
                    variant="contained"
                    color="secondary"
                    onClick={() => deleteHabit(index)}
                  />
                </Tooltip>
              </div>
            </Box>
            <Typography variant="body2">{habit.description}</Typography>
            {/* <Typography variant="body2">
                        {habit.repeatMode}
                    </Typography> */}
            {/* <Divider /> */}
          </li>
        ))}
      </ul>
    </Box>
  );
};
