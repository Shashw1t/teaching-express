const express = require('express');
const zod = require('zod');
const app = express();

// {
    //  email: string => email
    // password: atleast 8 letters
    // country : "IN"  , "US"
// }

const schema = zod.object({
    email: zod.string(),
    password: zod.string(),
    country: zod.literal("IN").or(zod.literal("US"))
})

app.use(express.json());

app.post("/health-checkup", (req,res) =>{
    // kidneys = [1,2]
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);

    if(!response.success){
        res.status(411).json({
            msg : `input is invalid`
        })
    } else{   
        res.send({
            response
        })
    }
});

app.listen(3000);