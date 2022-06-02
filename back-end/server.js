const express = require('express');
const app = express();
const cors = require('cors');
const port = 8001;

const { Pool } = require('pg');
require('dotenv').config();
const dbParams = require('./lib/db');
const db = new Pool(dbParams);
db.connect();

const users = require('./src/routes/users');

app.use(cors());
app.use('/users', users(db));

app.listen(port, () => {
  console.log('Express server is listening to port: ', port);
});