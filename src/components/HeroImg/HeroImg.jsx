import React from 'react';
/* import img1xs from '../../img/hero/img1xs.jpg';
import img1sm from '../../img/hero/img1sm.jpg';
import img1md from '../../img/hero/img1md.jpg';
import img1lg from '../../img/hero/img1lg.jpg'; */
import "./HeroImg.css"
import { Typography } from '@material-ui/core';
const HeroImg = () => {
    return ( 
        <div className="heroImg-wrapper">
            <Typography variant="h1" className="title-header">REMOTE FRONT-END JOBS</Typography>

            {/* <picture>
                <source srcSet={img1md} media="(min-width: 1200px)" />
                <source srcSet={img1md} media="(min-width: 768px)" />
                <source srcSet={img1sm} media="(min-width: 576px)" />
                <source srcSet={img1xs} media="(min-width: 320px)" />
                <img src={img1lg} alt="remote front-end jobs" />
            </picture> */}
        </div>
     );
}
 
export default HeroImg;





