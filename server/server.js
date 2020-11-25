const fs = require('fs');
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, '..', 'index.html'), 'utf-8', (err, data) => {
        if (err) throw err;
        res.send(data);
    });
});

app.listen(port, () => {
    console.log('server is runnig');
});
