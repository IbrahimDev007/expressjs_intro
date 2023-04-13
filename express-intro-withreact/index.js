const express = require('express');
const app = express();
const port = 5000;


app.get('/', (req, res) => {

    res.send('hello this is first expreess')
})
app.get('/phone', (req, res) => {

    res.send('this is phone component')
})

app.listen(port, () => {
    console.log(`this app runing in ${port}`);
})