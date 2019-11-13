import React from "react";
import SchoolIcon from '@material-ui/icons/School';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import HotelIcon from '@material-ui/icons/Hotel';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import GitHubIcon from '@material-ui/icons/GitHub';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Tooltip from '@material-ui/core/Tooltip';

const iconForCategory = {
    education: SchoolIcon,
    sports: DirectionsBikeIcon,
    sleep: HotelIcon,
    selfCare: FavoriteIcon,
    eatingAndCooking: RestaurantIcon,
    programming: GitHubIcon,
    music: MusicNoteIcon,
    drinking: LocalDrinkIcon
}

const tooltipForCategory = {
    education: 'education',
    sports: 'sports',
    sleep: 'sleep',
    selfCare: 'self care',
    eatingAndCooking: 'eating&cooking',
    programming: 'programming',
    music: 'music',
    drinking: 'drinking',
}

export const categoriesList = Object.keys(iconForCategory);

export const tooltipsList = Object.keys(tooltipForCategory);

export const CategoryIcon = ({category, ...props}) => {
    const IconClass = iconForCategory[category];
    const TooltipClass = tooltipForCategory[category];

    if(IconClass) {
        return (
            <Tooltip title={TooltipClass} >
                <IconClass {...props} />
            </Tooltip>
        )
    } else {
        return null;
    }
}