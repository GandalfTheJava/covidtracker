import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import './Cards.css';
const CardContainer = ({ data }) => {
    if (!data) {
        return 'Loading..'
    }
    let { confirmed, recovered, deaths, lastUpdate } = data;
    return (
        <div>
            <Grid container spacing={3} justify="center">
                <Grid item xs component={Card} className='infected'>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant="h5" component="h2">
                            <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2" component="p">
                            Number of active cases of COVID-19.
                    </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs component={Card} className='recovered'>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant="h5" component="h2">
                            <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2" component="p">
                            Number of Recovered cases of COVID-19.
                    </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs component={Card} className='deaths'>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant="h5" component="h2">
                            <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2" component="p">
                            Number of deaths from COVID-19.
                    </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default CardContainer