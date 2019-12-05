import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { colors, spacing, typography } from '../../styles/variables';
import { space } from '../../styles/helpers';

export const CustomButton = withStyles({
  root: {
    backgroundColor: colors.darkRed,
    borderRadius: spacing.radius,
    padding: `${space(1)}px ${space(2)}px`,
    boxShadow: `0 ${space(1) - 1}px ${space(1) + 1}px ${space(0.5)}px rgba(255, 105, 135, .3)`,
    border: 'none',
    color: colors.white,
    fontSize: typography.fontSize.small,
    textAlign: 'center',

    '&:hover': {
      backgroundColor: colors.darkRed
    },

    '&:disabled': {
      opacity: 0.3,
      color: colors.white
    }
  }
})(Button);

export const CustomButtonBig = withStyles({
  root: {
    padding: `${space(2)}px ${space(7)}px`,
    margin: `${space(2)}px`,
    fontSize: typography.fontSize.default
  }
})(CustomButton);
