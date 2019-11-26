import { createStyles, makeStyles } from '@material-ui/core/styles';
import { colors } from '../styles/variables';

export const useStyles = makeStyles(theme =>
  createStyles({
    title: {
      margin: '10px 0 5px',
      fontWeight: 600
    },
    subtitle: {
      margin: '5px 0'
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
      margin: 10,
      flex: 1,
      [theme.breakpoints.up('md')]: {
        margin: 70,
        height: 550
      }
    },
    loginBox: {
      fontSize: 12,
      margin: '10px 0 0'
    },
    link: {
      textDecoration: 'none',
      color: colors.mainRed,
      marginLeft: 4,
      fontWeight: 500
    }
  })
);
