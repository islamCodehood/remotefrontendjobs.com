import React from 'react';
import { Paper, makeStyles } from '@material-ui/core'
import CardsCollection from '../../components/CardsCollection/CardsCollection';

const useStyles = makeStyles(theme => ({
    homePage: {
      padding: "12px",
      backgroundColor: "#e3ffbf",
      marginTop: "-50px",
      marginRight: "12px",
      marginLeft: "12px",
      minHeight: "50vh",
    },
   
   }));

const Home = (props) => {
    const classes = useStyles();
    return ( 
        <Paper className={classes.homePage}>
            <CardsCollection jobs={props.jobs} />
        </Paper>
     );
}
 
export default Home;