const express = require('express');
const app = express();
const renderer = require('./renderer');
const path = require('path');

const PORT = 3000;

app.listen(PORT);
app.use(renderer);
app.use(express.static(path.join(__dirname, '/public')));
app.use('/static', express.static(path.join(__dirname, '/node_modules')));

console.log(`Server listening on ${PORT}`);