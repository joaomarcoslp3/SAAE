const express = require('express');
const routes = require('./routes');
const cors = require('cors')

require('./database');

const port = 8080

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

console.log(`[Express] Creating a new server on [${port}]`);


app.listen(port);