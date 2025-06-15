import React from 'react';
import {Container , AppBar, Typography,Grow,Grid} from '@mui/material';

import memories from './images/memories.png';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import usestyles from './styles';


const app=()=>{
    const classes = usestyles();
    return (
        <div className={classes.appBar}>
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center" className={classes.heading}>Memories</Typography>
                <img src={memories} alt="memories" height="60" className={classes.image} />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={6} md={9}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </div>
    )};

export default app;