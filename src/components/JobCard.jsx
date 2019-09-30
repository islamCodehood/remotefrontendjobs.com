import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardActions, Typography,  } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    card: {
      display: 'flex',
      minWidth: "300px",
    },
   
  }));
const JobCard = () => {
    return ( 
        <Card>
            <CardContent>
                <Typography component="h2" variant="h5">
                    Front-end developer
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Thinkful Inc.
                </Typography>
            </CardContent>
        </Card>
     );
}
 
export default JobCard;