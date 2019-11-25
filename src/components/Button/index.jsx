import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { colors } from '../../styles/variables';

export const CustomButton = withStyles({
  root: {
    backgroundColor: colors.darkRed,
    borderRadius: 3,
    border: 0,
    color: 'white',
    padding: '5px 5px',
    width: '100%',
    maxWidth: 120,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    display: 'inline',
    fontSize: 10,
    textAlign: 'center',

    '&:hover': {
      backgroundColor: colors.darkRed
    }
  }
})(Button);
