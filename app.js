const express = require('express');

const app = express()

app.get('/', (req, res) => {
    res.send('<a href="/contact">Contact Us</a> <br> <a href="/about">About Us</a>');
})

app.get('/contact', (req, res)=> {
    res.send('<h1>Contact US Page</h1>')
})

app.get('/about', (req, res)=> {
    res.send('<h1>About US Page</h1>')
})

app.get('*', (req, res)=> {
    res.send('<h1>404</h1><br> Go to <a href="/contact"><h2>Contact Us</h2></a>')
})


app.listen(3000, ()=> {
    console.log('Server on port 3000');
})