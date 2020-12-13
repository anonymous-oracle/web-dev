const express = require('express');
const request = require('request');
const https = require('https');

const app = express();

app.get('/', function (req, res) {
    res.send('Hi!');
});











app.listen(3000,function(){console.log(__filename+' running on PORT 3000')});