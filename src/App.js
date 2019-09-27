import React, { useState, useEffect } from "react";
import sha256 from "sha-256-js";
import "./App.css";
import Header from "./components/header/Header";

function App() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    collectJobs()
  }, []);

  const collectJobs = () => {
    fetch(
      "https://cors-anywhere.herokuapp.com/" +
        "https://stackoverflow.com/jobs/feed?q=front-end+developer&r=true"
    ).then(res => {
      res.text().then(xmlTxt => {
        const domParser = new DOMParser();
        const doc = domParser.parseFromString(xmlTxt, "text/xml");
        const items = doc.querySelectorAll("item")
        const jobsArr = []
        items.forEach((item, i) => {
          const title = item.querySelector('title').textContent;
          const author = item.querySelector('author').textContent;
          const link = item.querySelector('link').textContent;
          const categories = []
          const categoriesNodes = item.querySelectorAll('category');
          categoriesNodes.forEach(categoryNode => categories.push(categoryNode.textContent))
          const description = item.querySelector('description').textContent;
          const updateTime = item.querySelector('updated').textContent;
          const id = sha256(title + author + link + updateTime)
          const itemObj = {
            title,
            author,   
            link,
            categories,
            description,
            updateTime,
            id,
          }
          jobsArr.push(itemObj)
        })
        
        return jobsArr
      }).then(jobsArr => {
        filterJobs(jobsArr)
      })
    });

    const sortJobsByUpdateDate = filteredJobs => {
      filteredJobs.sort((a,b) => (a.updateTime < b.updateTime) ? 1 : ((b.updateTime < a.updateTime) ? -1 : 0)); 
      setJobs(filteredJobs)
    } 

    const filterJobs = jobsArr => {
      const keyWords = ["front-end", "front", "javascript", "html", "css", "angular", "angularjs", "react", "reactjs", "react.js", "native", "angular.js", "angular2", "ember", "svelte", "web"]
      const filteredJobs =  keyWords.map(keyWord => 
        jobsArr.filter(job => job.title.toLowerCase().split(" ").includes(keyWord))
      ).flat()
      sortJobsByUpdateDate(filteredJobs)
    } 
  };
  return <div className="App">
    <Header />
  </div>;
}

export default App;
