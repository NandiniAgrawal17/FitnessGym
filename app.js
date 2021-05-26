const express = require("express");
const path = require("path");
const fs = require("fs");
const { urlencoded } = require("body-parser");
const app = express();
const port = 80;

//EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static'))//For serving static files
// for parsing application/xwww-
app.use(urlencoded()); 

//PUG SPECIFIC STUFF
app.set('view engine','pug')//set the template engine as pug
app.set('views',path.join(__dirname, 'views'))//set the views directory

 


//END POINTS
app.get('/',(req,res)=>{
   
   const params = {'title':'NFitness Gym'}
    res.status(200).render('index.pug',params);
  })
app.post('/',(req,res)=>{
   name = req.body.name
   age = req.body.age
   Gender = req.body.Gender
   locality = req.body.locality
   let outputToWrite  = `the name of the client is ${name},${age} yeras old ,${Gender},residing at
   ${locality}`
   fs.writeFileSync('output.txt',outputToWrite)
   const params={'message':"Your form has been submitted sucessfully"}
    res.status(200).render('index.pug',params);
  })

 //START THE SERVEr
app.listen(port, ()=>{
 
    console.log(`the application stated suceesfully on port ${port}/`);
})