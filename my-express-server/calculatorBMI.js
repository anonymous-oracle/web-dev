const express = require('express')
const https = require('https');
const bodyParser = require('body-parser');
const app = express();

// app.use(bodyParser);
// app.use(express.text()) // for parsing application/json
// urlencoded is necessary for getting data from html forms
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// BMI CHALLENGE


app.get('/',function(req, res) {
    // console.log(__dirname)
    res.sendFile(__dirname+'/bmiCalculator.html')
})


// handle the post method
app.post('/bmicalculator', function(req, res){
    // res.send("thanks for posting")
    // console.log(req.params['height'])
    req.on('data', function(data){console.log(data)})

    // res.send("<em><strong>Thanks for posting. Your BMI is: </strong></em>"+Number(req.body['weight'])/(Number(req.body['height']) * Number(req.body['height'])))
})





app.listen(3000, function () {
    console.log('running the BMI calculator app server...')
})