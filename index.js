'use strict';

const express = require('express');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.static('public'));

app.listen(port, function () {
    console.log(`Running on port ${port}`);
});