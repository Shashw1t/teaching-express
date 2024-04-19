const express = require('express');
const app = express();
const port = 3000;

const users = {
    "user1": {
        kidneys: 2,
        condition: "normal"
    },
    "user2": {
        kidneys: 1,
        condition: "critical"
    }
};

// Endpoint to GET user's kidney details            
app.get('/user/:userID/kidneys', (req,res)=>{
    const userID = req.params.userID;
    const user = users[userID];

    if(!user){
        return res.status(404).json({error: "user not found"});
    }

    res.json({
        kidneys: user.kidneys,
        condition: user.condition
    });
});


app.use(express.json());
// Endpoint to add new kidneys for a user
app.post('/user/:userId/kidneys', (req, res) => {
    const userId = req.params.userId;
    const { kidneys } = req.body;

    if (typeof kidneys !== 'number' || kidneys <= 0) {
        return res.status(400).json({ error: "Invalid kidneys value" });
    }

    if (!users[userId]) {
        return res.status(404).json({ error: "User not found" });
    }

    users[userId].kidneys += kidneys;

    res.json({ message: "Kidneys added successfully", newKidneysCount: users[userId].kidneys });
});

app.listen(port, ()=>{
    console.log(`app is listening on port 3000`);
});