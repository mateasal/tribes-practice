const PORT = 8080;
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.static('views'))

mongoose.connect(`mongodb://localhost:27017/tribes`, {
    useNewUrlParser: true,
    useCreateIndex: true,
});

app.get('/', function(req, res) {
    res.sendFile(__dirname, path.join('index.html'));
});

const router = require('./routes/routes-index');
app.use(router);

app.listen(PORT, () => {
    console.log(`Port is listening on ${PORT}`);
});

module.exports = app;