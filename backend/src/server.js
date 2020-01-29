const express = require('express');
const routes = require('./routes');

require('./database');

const app = express();

console.log('[Express] Creating a new server');

app.use(express.json());
app.use(routes);

app.listen(8080);