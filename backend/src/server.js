const express = require('express');
const routes = require('./routes');

require('./database');

const app = express();

const port = 8080

console.log(`[Express] Creating a new server on [${port}]`);

app.use(express.json());
app.use(routes);

app.listen(port);