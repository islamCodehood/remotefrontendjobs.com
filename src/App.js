import React, { useState, useEffect } from "react";
import sha256 from "sha-256-js";
import "./App.css";

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
        sortJobsByUpdateDate(jobsArr)
        filterJobs(jobsArr)
        return jobsArr
      }).then(jobsArr => setJobs(jobsArr))
    });

    const sortJobsByUpdateDate = jobsArr => jobsArr.sort((a,b) => (a.updateTime < b.updateTime) ? 1 : ((b.updateTime < a.updateTime) ? -1 : 0)); 

    const filterJobs = jobsArr => {
      const keyWords = ["front-end", "front", "javascript", "html", "css", "angular", "angularjs", "react", "reactjs", "react.js", "native", "angular.js", "angular2", "ember", "svelte", "web"]
      const filteredJobs = jobsArr.forEach(job => {
        return job.title.split(" ")
      }
        /* .filter(titleArrItem => titleArrItem.includes(keyWords)) */
      ).filter(titleArrItem => titleArrItem.includes(keyWords))
      console.log(filteredJobs) 
    } 
    /*fetch("https://cors-anywhere.herokuapp.com/" + "https://stackoverflow.com/jobs/feed?q=front-end+developer&r=true&sort=p").then((res) => {
  res.text().then((xmlTxt) => { 
    var domParser = new DOMParser()
    let doc = domParser.parseFromString(xmlTxt, 'text/xml')
    const item1 = doc.querySelectorAll('item')[0]
    const item2 = doc.querySelectorAll('item')[1]
    console.log(item1, item2)
    let heading1 = document.createElement('h2')
    let heading2 = document.createElement('h2')
    let div1 = document.createElement('div')
    let div2 = document.createElement('div')
    let title1 = item1.querySelector('title').textContent
    let title2 = item2.querySelector('title').textContent
    let description1 = item1.querySelector('description').textContent
    let description2 = item2.querySelector('description').textContent
    //console.log(description)
    heading1.textContent = title1
    heading2.textContent = title2
    div1.innerHTML = description1
    div2.innerHTML = description2
    document.querySelector('.container').appendChild(heading1)
    document.querySelector('.container').appendChild(div1)
    document.querySelector('.container').appendChild(heading2)
    document.querySelector('.container').appendChild(div2)
  })
})*/

    /*fetch("https://cors-anywhere.herokuapp.com/"+"https://stackoverflow.com/jobs/feed?q=front-end+developer&r=true&sort=i&pg=3").then((res) => {
  res.text().then((xmlTxt) => {
    var domParser = new DOMParser()
    let doc = domParser.parseFromString(xmlTxt, 'text/xml')
    doc.querySelectorAll('item').forEach((item,i) => {
       let para = document.createElement('p')
        let title = item.querySelector('title').textContent
        para.textContent = title
        document.querySelector('.container').appendChild(para)
         console.log(item, i)
       })
     })
}) */
    /* fetch("https://cors-anywhere.herokuapp.com/"+"http://rss.indeed.com/rss?q=front+end+web+developer&l=Remote").then((res) => {
  res.text().then((xmlTxt) => {
    var domParser = new DOMParser()
    let doc = domParser.parseFromString(xmlTxt, 'text/xml')
    doc.querySelectorAll('item').forEach((item,i) => {
       let para = document.createElement('p')
        let title = item.querySelector('title').textContent
        para.textContent = title
        document.querySelector('.container').appendChild(para)
         console.log(item, i)
       })
     })
})
fetch("https://cors-anywhere.herokuapp.com/"+"http://rss.indeed.com/rss?q=front+end+web+developer&l=Remote&start=10").then((res) => {
  res.text().then((xmlTxt) => {
    var domParser = new DOMParser()
    let doc = domParser.parseFromString(xmlTxt, 'text/xml')
    doc.querySelectorAll('item').forEach((item,i) => {
       let para = document.createElement('p')
        let title = item.querySelector('title').textContent
        para.textContent = title
        document.querySelector('.container').appendChild(para)
         console.log(item, i)
       })
     })
}) 
fetch("https://cors-anywhere.herokuapp.com/"+"http://rss.indeed.com/rss?q=front+end+web+developer&l=Remote&start=20").then((res) => {
  res.text().then((xmlTxt) => {
    var domParser = new DOMParser()
    let doc = domParser.parseFromString(xmlTxt, 'text/xml')
    doc.querySelectorAll('item').forEach((item,i) => {
       let para = document.createElement('p')
        let title = item.querySelector('title').textContent
        para.textContent = title
        document.querySelector('.container').appendChild(para)
         console.log(item, i)
       })
     })
}) 
fetch("https://cors-anywhere.herokuapp.com/"+"http://rss.indeed.com/rss?q=front+end+web+developer&l=Remote&start=30").then((res) => {
  res.text().then((xmlTxt) => {
    var domParser = new DOMParser()
    let doc = domParser.parseFromString(xmlTxt, 'text/xml')
    doc.querySelectorAll('item').forEach((item,i) => {
       let para = document.createElement('p')
        let title = item.querySelector('title').textContent
        para.textContent = title
        document.querySelector('.container').appendChild(para)
         console.log(item, i)
       })
     })
})  */
  };
  return <div className="App"></div>;
}

export default App;
