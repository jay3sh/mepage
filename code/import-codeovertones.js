
const fs = require('fs');
const xml2js = require('xml2js');
const md = require('html-md');

let parser = new xml2js.Parser();

let parents = [];

function walk(obj, callback) {
  if(typeof obj === 'string') {
    return;
  }
  parents.unshift(obj); // prepend to the array
  if(obj instanceof Array) {
    for(let item of obj) {
      walk(item, callback);
    }
  } else {
    for(let key in obj) {
      let val = obj[key];
      callback(key, val);
      walk(val, callback);
    }
  }
  parents.shift(); // pop from the beginning of array
}

let numPosts = 0;
const KIND_POST = "http://schemas.google.com/blogger/2008/kind#post";
const SCHEME_KIND = "http://schemas.google.com/g/2005#kind"

function processContent(contentval, year) {
  if(contentval[0]['$']['type'] === 'html') {
    let categories = parents[0]['category'];
    let catterm;
    for(let catitem of categories) {
      if(catitem['$']['scheme'] === SCHEME_KIND) {
        catterm = catitem['$']['term'];
      }
    }
    if(catterm === KIND_POST) {
      let dateStr = parents[0]['published'][0];
      let date = new Date();
      date.setTime(Date.parse(dateStr));

      if(date.getFullYear() === year) {

        // Create markdown filename
        let title = parents[0]['title'][0]['_']; // title
        if(!title) {
          console.error('No title found', parents[0]['title'][0]);
          return;
        }
        let quoteescaped_title = title.replace(/"/g,'\\"');
        let sanetitle = title
          .split(/\s+/)
          .map(seg => seg.replace(/[\W]/g,'').toLowerCase())
          .filter(seg => seg.length)
          .join('-');
        let mdfilename = 
          `${date.getFullYear()}-`+
          `${('0'+(date.getMonth()+1)).slice(-2)}-`+
          `${('0'+date.getDate()).slice(-2)}-`+
          sanetitle+'.md';

        // Convert content of post from HTML to markdown
        let content = contentval[0]['_'];

        let mdfilepath = __dirname+'/../_posts/'+mdfilename;
        let mdcontent =
`---
layout: post
title: "${quoteescaped_title}"
---
${title}
===
${md(content)}
`;
        fs.writeFileSync(mdfilepath, mdcontent);

        console.log('Wrote '+mdfilepath);

        numPosts++;
      }

    }
  }
}

function extractPostsFromYear(obj, year) {
  walk(obj, (key,val) => {
    if(key === 'content') {
      try {
        processContent(val, year);
      } catch(e) {
        console.log('Failed ',e);
        console.log(val);
      }
    }
  });
  console.log('Number of posts: '+numPosts);
}

fs.readFile('codeovertones.xml', function (err, data) {
  parser.parseString(data, function (err, result) {
    for(let year of [2011,2012]) {
      extractPostsFromYear(result, year);
    }
  });
});

