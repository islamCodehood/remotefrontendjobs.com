import React from 'react';
import JobCard from '../JobCard'
import './CardsCollection.css'

const CardsCollection = () => {
    return ( 
        <ul className="cards-collection">
            <li>
                <JobCard />
            </li>
            <li>
                <JobCard />
            </li>
            <li>
                <JobCard />
            </li>
            <li>
                <JobCard />
            </li>
        </ul>
     );
}
 
export default CardsCollection;