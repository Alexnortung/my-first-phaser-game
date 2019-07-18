const express = require('express')
const fs = require("fs");
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.use('/js', express.static('js'));
app.use('/css', express.static('css'));
app.use('/node_modules', express.static('node_modules'));
app.use('/assets', express.static('assets'));

app.listen(port, () => console.log(`Example app listening on port ${port}! try it locally: http://127.0.0.1:3000/`))