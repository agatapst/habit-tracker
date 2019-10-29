import React from "react";
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

const iconForCategory = {
    education: SchoolIcon,
    sports: DirectionsBikeIcon,
    sleep: HotelIcon,
    selfCare: FavoriteIcon,
    eatingAndCooking: RestaurantIcon,
    nature: EmojiNatureIcon,
    programming: GitHubIcon,
    music: MusicNoteIcon,
    drinking: LocalDrinkIcon,
    entertainment: MoodIcon,
}

export const categoriesList = Object.keys(iconForCategory);

export const CategoryIcon = ({category, ...props}) => {
    const IconClass = iconForCategory[category];
    if(IconClass) {
        return <IconClass {...props} />
    } else {
        return null;
    }
}