const express = require('express');
const app = express();
app.use(express.json());

let numberOfRequest = 0;
function calculateRequests(req,res,next){
    numberOfRequest++;
    console.log(numberOfRequest);
    next();
}
app.get("/health-checkup", (req,res) =>{
    const username = req.headers.username; // params seekhna
    const password = req.headers.password;
    const kidneyid = req.query.kidneyid;

    if(username != "shashwat" || password != "pass"){
        res.status(400).json({"msg": "somethings up with your inputs"})
        return
    }
    
    if(kidneyid != 1 && kidneyid != 2){
        res.status(400).json({"msg": "somethings up with your inputs"}) // invalid input de rhe hain
        return
    }

    // do something with kidney here    
    res.json({
        msg: "your kidney is fine"
    })
});

app.listen(3000); // this line tells which port number to listen to
