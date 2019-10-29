import React from 'react';
import { Field } from 'formik';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import SchoolIcon from '@material-ui/icons/School';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import HotelIcon from '@material-ui/icons/Hotel';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import EmojiNatureIcon from '@material-ui/icons/EmojiNature';
import GitHubIcon from '@material-ui/icons/GitHub';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MoodIcon from '@material-ui/icons/Mood';

const useStyles = makeStyles((theme) =>
createStyles({
  inputField: {
    margin: 10,

    '& > *': {
      width: '100%',
    }
  }
}),
);

export const IconsField = ({
    name,
    label,
    value,
    ...props
  }) => {
  
    const classes = useStyles();

    return (
      <Field
        name={name}
        render={({field}) => {
          return (
            <div className={classes.inputField}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Category</FormLabel>
                        <RadioGroup
                        aria-label="icons"
                        name="icons"
                        className={classes.group}
                        value={field.value}
                        style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}
                        >
                            <FormControlLabel value="education" control={<Radio icon={<SchoolIcon />} 
                            checkedIcon={<SchoolIcon />}/>} />
                            <FormControlLabel value="sports" control={<Radio icon={<DirectionsBikeIcon />} 
                            checkedIcon={<DirectionsBikeIcon />}/>} />
                            <FormControlLabel value="sleep" control={<Radio icon={<HotelIcon />} 
                            checkedIcon={<HotelIcon />}/>} />
                            <FormControlLabel value="selfCare" control={<Radio icon={<FavoriteIcon/>} 
                            checkedIcon={<FavoriteIcon />}/>} />
                            <FormControlLabel value="eatingAndCooking" control={<Radio icon={<RestaurantIcon />} 
                            checkedIcon={<RestaurantIcon />} />} />
                            <FormControlLabel value="nature" control={<Radio icon={<EmojiNatureIcon />} 
                            checkedIcon={<EmojiNatureIcon />}/>} />
                            <FormControlLabel value="programming" control={<Radio icon={<GitHubIcon />} 
                            checkedIcon={<GitHubIcon />}/>} />
                            <FormControlLabel value="music" control={<Radio icon={<MusicNoteIcon />} 
                            checkedIcon={<MusicNoteIcon />}/>} />
                            <FormControlLabel value="drinking" control={<Radio icon={<LocalDrinkIcon />} 
                            checkedIcon={<LocalDrinkIcon />}/>} />
                            <FormControlLabel value="entertainment" control={<Radio icon={<MoodIcon />} 
                            checkedIcon={<MoodIcon />}/>} />
                        </RadioGroup>
                </FormControl>
             </div>

          );
        }}
      />
    );
  }