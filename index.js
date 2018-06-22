const express = require('express');
const app = express();
const renderer = require('./renderer');
const path = require('path');
const runner = require('./runner');

const PORT = 3000;

app.listen(PORT);
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(renderer);
app.use('/static', express.static(path.resolve(__dirname, 'node_modules')));

app.use('/run', runner);
console.log(`Server listening on ${PORT}`);