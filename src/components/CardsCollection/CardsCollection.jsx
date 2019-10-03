import React from 'react';
import JobCard from '../jobCard/JobCard'
import './CardsCollection.css'

const CardsCollection = (props) => {
    return ( 
        <ul className="cards-collection">
            {props.jobs.map(job => (
                <li key={job.id}>
                    <JobCard title={job.title} company={job.author} techs={job.categories} date={job.updateTime} link={job.link} />
                </li>
            ))}
        </ul>
     );
}
 
export default CardsCollection;