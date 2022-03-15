const { MarkovMachine } = require("./markov");
const fs = require('fs');
const axios = require("axios");
const argv = process.argv

async function urlText (url){
    console.log(url)
    try {
        r = await axios.get(`${url}`)
        webText = new MarkovMachine(r.data)
        webText.makeText(10)
        console.log(webText.text)
    }
    catch (err) {
        console.log('ERROR with the URL', err)
    }
}

pathText = (path) =>{
  
    fs.readFile(`${path}`, 'utf8', (err,data) =>{
        if (err){
            console.log(`Error reading ${path}`, err)
            process.kill(1)
        }
        else {
            fileText = new MarkovMachine(`${data}`)
            fileText.makeText(10)
            console.log(fileText.text)
        }
    })
}

if (argv[2] === 'url'){
    urlText(argv[3])
    console.log(argv[3])
}
else if (argv[2] === 'file'){
    pathText(argv[3])
    // console.log(argv[3])
}