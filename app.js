const { urlencoded } = require('express');
const express = require('express');
const app = express();
const port = process.env.port || 3000;
const path = require('path');


// EXPRESS RELATED STUFF 

app.use(express.static('static'))
app.use(urlencoded());

//PUG RELATED STUFF 
app.set('viewengine','pug');
app.set('views',path.join(__dirname,'views'))


// ENDPOINTS 

app.get("/",(req,res)=>{
res.render('index.pug');
})





// LISTENING TO THE SERVER 

app.listen(port,()=>{
    console.log(`The app started on localhost:${port}`);
})
    
