import React from 'react';
import { Typography,  } from '@material-ui/core'
import './SideMenu'
import TechsFilter from '../TechsFilter/TechsFilter';
const SideMenu = (props) => {
    const { techs } = props;
    return ( 
        <div className="side-menu">
            <Typography variant="subtitle1">
                Filter By
            </Typography>
            <br />
            <Typography variant="overline" color="textSecondary" >
                Techs
            </Typography>
            <TechsFilter techs={techs} />
        </div>
     );
}
 
export default SideMenu;