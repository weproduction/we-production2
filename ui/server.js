const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

let server = null;
module.exports = {
    start() {
        server = app.listen(3000, () => console.log('Started'))
    },
    stop() {
        server.close(() => console.log('Stopped'))
    }
};
