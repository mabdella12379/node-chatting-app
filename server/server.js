const path = require('path');
const express = require('express');
const http = require('http');

const publicPath = path.join(__dirname + '/../public');

var app = express();

app.use(express.static(publicPath));

var server = http.createServer(app);

server.listen(3000, () => {
    console.log('Server is up on port 3000');
});