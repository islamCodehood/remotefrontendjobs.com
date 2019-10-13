import React from 'react';
import { Paper, makeStyles } from '@material-ui/core'
import CardsCollection from '../../components/CardsCollection/CardsCollection';

const useStyles = makeStyles(theme => ({
    homePage: {
      maxWidth: "1000px",
      width: "65vw",
      padding: "24px",
      backgroundColor: "",
      marginTop: "-48px",
      marginRight: "12px",
      marginLeft: "12px",
      minHeight: "50vh",
    },
   
   }));

const Home = (props) => {
    const classes = useStyles();
    const { jobs/* , jobReqs */ } = props
    return ( 
        <Paper className={classes.homePage}>
            <CardsCollection jobs={jobs} /* jobReqs={jobReqs} */ />
        </Paper>
     );
}
 
export default Home;