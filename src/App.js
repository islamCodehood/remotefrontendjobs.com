import React, { useState, useEffect } from "react";
import sha256 from "sha-256-js";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import SideMenu from "./components/SideMenu/SideMenu";

function App() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    collectJobs();
  }, []);
/*   const [jobReqs, setJobReqs] = useState([]);
  useEffect(() => {
    addJobReqs(jobs);
  }, []); */

  const collectJobs = () => {
    fetch(
      "https://cors-anywhere.herokuapp.com/" +
        "https://stackoverflow.com/jobs/feed?q=front-end+developer&r=true"
    ).then(res => {
      res
        .text()
        .then(xmlTxt => {
          const domParser = new DOMParser();
          const doc = domParser.parseFromString(xmlTxt, "text/xml");
          const items = doc.querySelectorAll("item");
          const jobsArr = [];
          items.forEach((item, i) => {
            const title = item.querySelector("title").textContent;
            const author = item.querySelector("author").textContent;
            const link = item.querySelector("link").textContent;
            const categories = [];
            const categoriesNodes = item.querySelectorAll("category");
            categoriesNodes.forEach(categoryNode =>
              categories.push(categoryNode.textContent)
            );
            const description = item.querySelector("description").textContent;
            const updateTime = item.querySelector("updated").textContent;
            const id = i;

            const itemObj = {
              title,
              author,
              link,
              categories,
              description,
              updateTime,
              id,
            };
            jobsArr.push(itemObj);
          });

          return jobsArr;
        })
        .then(jobsArr => {
          filterJobs(jobsArr);
        });
    });
    const cutTitle = jobsArr => {
      const indices = jobsArr.map(job => job.title.indexOf(" at "));

      let cutJobs = jobsArr.map((job, i) => {
        job.title = job.title.substring(0, indices[i]);
        return job;
      });
      sortJobsByUpdateDate(cutJobs);
    };

    const sortJobsByUpdateDate = filteredJobs => {
      //console.log(cutJobs);
      filteredJobs.sort((a, b) =>
        a.updateTime < b.updateTime ? 1 : b.updateTime < a.updateTime ? -1 : 0
      );
      //console.log(cutJobs);
      const filteredDuplicates = filteredJobs.filter((job, index, jobs) => {
        if (index < jobs.length - 1) {
          return job.title !== jobs[index + 1].title;
        } else {
          return job;
        }
      });
      //addJobTypeAndExperience(filteredDuplicates);
      setJobs(filteredDuplicates);
    };

    const filterJobs = jobsArr => {
      const keyWords = [
        "front-end",
        "front",
        "frontend",
        "javascript",
        "html",
        "css",
        "angular",
        "angularjs",
        "react",
        "reactjs",
        "react.js",
        "native",
        "angular.js",
        "angular2",
        "ember",
        "svelte",
        "web"
      ];

      const filteredJobs = keyWords
        .map(keyWord =>
          jobsArr.filter((job, i) =>
            job.title
              .toLowerCase()
              .split(" ")
              .includes(keyWord)
          )
        )
        .flat();

      cutTitle(filteredJobs);
    };
  };

/*   const addJobTypeAndExperience = filteredDuplicates => {
    let updatedJobs = [];
    filteredDuplicates.forEach(job => {
      fetch("https://cors-anywhere.herokuapp.com/" + job.link)
        .then(res => res.text())
        .then(txt => {
          var domParser = new DOMParser();
          let doc = domParser.parseFromString(txt, "text/html");
          const jobType = doc.querySelector(".job-details--about")
            .firstElementChild.firstElementChild.lastElementChild.textContent;
          const experience = doc.querySelector(".job-details--about")
            .firstElementChild.firstElementChild.nextElementSibling
            .lastElementChild.textContent;
          job.jobType = jobType;
          job.experience = experience;
          updatedJobs.push(job);
          console.log(job)
        }); 
    });
    console.log(updatedJobs); 
    setJobs(filteredDuplicates);
    addJobReqs(filteredDuplicates)
  }; */
  const techs = jobs
    .map(job => job.categories)
    .flat()
    .sort()
    .filter((tech, index, techs) => tech !== techs[index + 1]);

  /* const addJobReqs = jobs => {
    let items = []
    jobs.forEach(job => 
      fetch("https://cors-anywhere.herokuapp.com/" + job.link)
        .then(res => res.text())
        .then(txt => {
          
          var domParser = new DOMParser();
          let doc = domParser.parseFromString(txt, "text/html");
          const jobType = doc.querySelector(".job-details--about")
            .firstElementChild.firstElementChild.lastElementChild.textContent;
          const experience = doc.querySelector(".job-details--about")
            .firstElementChild.firstElementChild.nextElementSibling
            .lastElementChild.textContent;
            const id = job.id
          let reqs = {
            jobType,
            experience,
            id
          }
          items.push(reqs)
          console.log(items)
          return items
        })
      
      )
  } */

  return (
    <div className="App">
      <Header />
      <main>
        <Home jobs={jobs}/*  jobReqs={addJobReqs(jobs)} */ /> 
        <SideMenu techs={techs} />
      </main>
    </div>
  );
}

export default App;
