/* fetch("https://cors-anywhere.herokuapp.com/"+"https://stackoverflow.com/jobs/feed?q=front-end+developer&r=true&sort=i").then((res) => {
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
fetch("https://cors-anywhere.herokuapp.com/"+"https://stackoverflow.com/jobs/feed?q=front-end+developer&r=true&sort=i&pg=2").then((res) => {
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
fetch("https://cors-anywhere.herokuapp.com/"+"https://stackoverflow.com/jobs/feed?q=front-end+developer&r=true&sort=i&pg=3").then((res) => {
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
fetch("https://cors-anywhere.herokuapp.com/"+"http://rss.indeed.com/rss?q=front+end+web+developer&l=Remote").then((res) => {
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
}) 
