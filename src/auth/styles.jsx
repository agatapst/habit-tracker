import { createStyles, makeStyles } from '@material-ui/core/styles';
import { colors, typography } from '../styles/variables';
import { space } from '../styles/helpers';

export const useStyles = makeStyles(theme =>
  createStyles({
    title: {
      margin: `${space(2)}px 0 ${space(1)}px`,
      fontWeight: typography.fontWeight.semibold
    },
    subtitle: {
      margin: `${space(2)}px 0`
    },
    imageBox: {
      display: 'flex',
      justifyContent: 'center',

      [theme.breakpoints.up('md')]: {
        width: '100%'
      }
    },
    image: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        height: '100%',
        width: '100%'
      }
    },
    main: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      margin: `${space(2)}px`,
      flex: 1,
      [theme.breakpoints.up('md')]: {
        margin: `${space(18)}px`,
        height: `${space(137)}px`
      }
    },
    loginBox: {
      fontSize: typography.fontWeight.regular,
      margin: `${space(2)}px 0 0`
    },
    link: {
      textDecoration: 'none',
      color: colors.mainRed,
      margin: `0 ${space(1)}px 0`,
      fontWeight: typography.fontWeight.medium
    }
  })
);
