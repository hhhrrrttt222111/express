const express = require('express');
const app = express()
const path = require('path')

app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'ejs');


app.get('/questions', (req, res) => {

let questions = [
    {title: "What is node.js", user: "John", votes: "10"},
    {title: "What is express.js", user: "HRT", votes: "21"},
    {title: "What is vanilla.js", user: "VK", votes: "18"},
]

    res.render('index', {questions: questions});
})







app.listen(3000, () => {
    console.log('Server at 3000')
})