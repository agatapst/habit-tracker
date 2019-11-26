import { createStyles, makeStyles } from '@material-ui/core/styles';

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
      width: '100%',
      [theme.breakpoints.up('md')]: {
        display: 'flex'
      }
    },
    main: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
      [theme.breakpoints.up('md')]: {
        margin: 100,
        height: 500
      }
    },
    loginBox: {
      fontSize: 12,
      margin: '10px 0 0'
    }
  })
);
