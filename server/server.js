const express = require('express');
const path = require('path');

const app = express();

const { timeStamp } = require('./utils/time');

app.use(express.static('public'));

app.get('/:time', (req, res) => {
    var dateObj = timeStamp(req.params.time);
    if (dateObj.unix) {
       return res.send(dateObj);
    }
    return res.status(400).send(dateObj);
    
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});

module.exports = { app };