const express = require('express');
const user = require('../routers/user');
const list = require('../routers/list');
const task = require('../routers/task');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Routers
app.use('/user', user);
app.use('/list', list);
app.use('/task', task);

const port = 8080;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});