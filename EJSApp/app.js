const express = require('express');
const app = express()



app.set('view engine', 'ejs');


app.use(express.static('public'));

app.get('/user/:id/:username', (req, res)=> {
    let userId = req.params.id;
    let user = req.params.username;
    res.render('index', {id: i=userId, username: user})
})


app.listen(3000, ()=> {
    console.log('Server at 3000')
})