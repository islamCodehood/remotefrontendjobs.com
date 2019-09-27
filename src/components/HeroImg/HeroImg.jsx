import React from 'react';
import img1xs from '../../img/hero/img1xs.jpg';
import img1sm from '../../img/hero/img1sm.jpg';
import img1md from '../../img/hero/img1md.jpg';
import img1lg from '../../img/hero/img1lg.jpg';
import "./HeroImg.css"
const HeroImg = () => {
    return ( 
        <div className="heroImg-wrapper">
            <picture>
                <source srcset={img1xs} media={"min-width: 320px"} />
                <source srcset={img1sm} media="min-width: 576px" />
                <source srcset={img1md} media="(min-width: 768px)" />
                <source srcset={img1lg} media="(min-width: 1200px)" />
                <img src={img1xs} alt="remote front-end jobs" />
            </picture>
        </div>
     );
}
 
export default HeroImg;





