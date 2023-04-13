const express = require('express');
const phone = require('./phone.json');
const cors = require('cors');
const app = express();
const port = 5000;
app.use(cors())


app.get('/', (req, res) => {

    res.send('hello this is first expreess')
})
app.get('/phone', (req, res) => {

    res.send(phone)
})
app.get('/phone/:id', (req, res) => {
    const id = req.params.id;
    const phones = phone.find(phone => phone.id === parseInt(id)) || {};
    res.send(phones)
})

app.listen(port, () => {
    console.log(`this app runing in ${port}`);
})