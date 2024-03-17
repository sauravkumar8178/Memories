import React from "react";

import { Container ,AppBar, Typography, Grow, Grid } from '@mui/material';

import memories from './images/memories.jpeg';  

const App = () => {
    return (
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Memories</Typography>
                <img src={memories} alt="memorise" height="60" />
            </AppBar>
        </Container>
    );
}

export default App;