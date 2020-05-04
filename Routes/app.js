const express = require('express')
const app = express();






app.get('/user/:id/:username/', (req, res) => {
    let userId = req.params.id;
    let user = req.params.username;
    res.render('index.ejs', {id: userId, username: user});
})




app.listen(3000, () => {
    console.log('Server at 3000')
})