import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Friend from '../pages/Friend';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: '64px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Layout = ({ children }) => {
    const classes = useStyles();

    return (
    <Container maxWidth="md" className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Friend />
            </Grid>  
            <Grid item xs={12} md={8}>
                {children}
            </Grid>
        </Grid>
    </Container>
  );
};

export default Layout;