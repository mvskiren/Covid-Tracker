import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames';
import classes from './Cards.module.css';
import classNames from 'classnames';
 
const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
      return 'Loading...';
    }
  
    return (
        <div className={styles.container}>
          <div className={classNames({[styles.cards]: true, [styles.redbg]: true})}>
             <h4 className={classes.active}>Confirmed</h4> <span className={styles.ledred}></span>
             <h3>
             <CountUp className={classes.active} start={0} end={confirmed.value} duration={2.75} separator="," />
             </h3>
             <h6> Last Update: {new Date(lastUpdate).toDateString()}</h6>
          </div>
          <div className={classNames({[styles.cards]: true, [styles.greenbg]: true})}>
             <h4 className={classes.recovered}>Recovered</h4> <span className={styles.ledgreen}></span>
             <h3>
             <CountUp className={classes.recovered} start={0} end={recovered.value} duration={2.75} separator="," />
             </h3>
             <h6> Last Update: {new Date(lastUpdate).toDateString()}</h6>
          </div>
          {/* <div className={styles.cards}>
             <h4 className={classes.confirmed} >Confirmed</h4> <span className={styles.ledblue}></span>
             <h2 className={classes.confirmed}>{confirmed.value}</h2>
          </div> */}
          <div className={classNames({[styles.cards]: true, [styles.bluebg]: true})}>
             <h4 className={classes.deaths}>Deaths</h4>  
            <span className={styles.ledblue}></span>
             <h3>
             <CountUp className={classes.deaths} start={0} end={deaths.value} duration={2.75} separator="," />
             </h3>
             <h6> Last Update: {new Date(lastUpdate).toDateString()}</h6>

          </div>
         
        </div>
      );
    };
    export default Info;





  //   <Grid container spacing={3} justify="center">
  //   <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
  //     <CardContent>
  //       <Typography color="textSecondary" gutterBottom>
  //         Infected
  //       </Typography>
  //       <Typography variant="h5" component="h2">
  //         <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
  //       </Typography>
  //       <Typography color="textSecondary">
  //         {new Date(lastUpdate).toDateString()}
  //       </Typography>
  //       <Typography variant="body2" component="p">
  //         Number of active cases of COVID-19.
  //       </Typography>
  //     </CardContent>
  //   </Grid>
  //   <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
  //     <CardContent>
  //       <Typography color="textSecondary" gutterBottom>
  //         Recovered
  //       </Typography>
  //       <Typography variant="h5" component="h2">
  //         <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
  //       </Typography>
  //       <Typography color="textSecondary">
  //         {new Date(lastUpdate).toDateString()}
  //       </Typography>
  //       <Typography variant="body2" component="p">
  //         Number of recoveries from COVID-19.
  //       </Typography>
  //     </CardContent>
  //   </Grid>
  //   <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
  //     <CardContent>
  //       <Typography color="textSecondary" gutterBottom>
  //         Deaths
  //       </Typography>
  //       <Typography variant="h5" component="h2">
  //         <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
  //       </Typography>
  //       <Typography color="textSecondary">
  //         {new Date(lastUpdate).toDateString()}
  //       </Typography>
  //       <Typography variant="body2" component="p">
  //         Number of deaths caused by COVID-19.
  //       </Typography>
  //     </CardContent>
  //   </Grid>
  // </Grid>