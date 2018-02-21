const express = require('express');
const path = require('path');

const app = express();

const { timeStamp } = require('./utils/time');
const port = process.env.PORT || 3000;

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

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

module.exports = { app };