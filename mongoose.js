const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://iamsoranic:iamsoranic@cluster0.f3l3f3k.mongodb.net/userappnew")

const User = mongoose.model('Users', { name : String, email:String, password:String });
    
app.post("/signup", async (req, res)  => {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    
    const existingUser = await User.findOne({ email: username});
    if(existingUser){
        return res.status(403).json({
            msg: "Username already exists"
        });
    }

const user = new User({
    name: name,
    email:username,
    password:password
});
user.save();
res.json({
    msg: "user created successfully"
})

})


app.listen(3000);