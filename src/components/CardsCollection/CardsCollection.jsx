import React from "react";
import JobCard from "../jobCard/JobCard";
import "./CardsCollection.css";

const CardsCollection = props => {
  const { jobs, /* jobReqs */ } = props;
  return (
    <ul className="cards-collection">
      {jobs.map((job, i) =>  (
        <li key={job.id}>
          <JobCard
            title={job.title}
            company={job.author}
            techs={job.categories}
            date={job.updateTime}
            link={job.link}
            id={job.id}
            //jobReqs={jobReqs}
          />
        </li>
      ))}
    </ul>
  );
};

export default CardsCollection;
