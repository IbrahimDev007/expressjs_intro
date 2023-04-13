const express = require('express');
const phone = require('./phone.json');
const app = express();
const port = 5000;


app.get('/', (req, res) => {

    res.send('hello this is first expreess')
})
app.get('/phone', (req, res) => {

    res.send(phone)
})
app.get('/phone/:id', (req, res) => {
    const id = req.params.id;
    res.send(id)
})

app.listen(port, () => {
    console.log(`this app runing in ${port}`);
})