import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const TechsFilter = (props) => {
    const { techs } = props;
    return ( 
        <ul>
            {techs.map(tech => (
                <li>
                    <Checkbox
            /* checked={state.checkedB}
            onChange={handleChange('checkedB')} */
            value="checkedB"
            color="primary"
          /> {tech}
                </li>
            ))}
        </ul>
     );
}
 
export default TechsFilter;