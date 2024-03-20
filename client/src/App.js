import React from "react";

import { Container ,AppBar, Typography, Grow, Grid } from '@mui/material';

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form"
import memories from './images/memories.png';  
import useStyles from './styles';

const App = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit" className={classes.AppBar}>
                <Typography variant="h2" align="center" className={classes.heading}>Memories</Typography>
                <img src={memories} alt="memorise" height="60" className={classes.image} />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;