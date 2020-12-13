const express = require('express')
const app = express();

// for a request made to the main route of a server, the browser gets an appropriate response back from
// the server for that route
// app.get('/', function(request, response){
//     console.log(request)

//     response.send('<h1>hey there</h1>')}) 

app.get('/', function(req, res){
    console.log(req)

    res.send('<h1>hey there</h1>')}) 

// GET request is sent to the route of the hosted server; that route will be present where the server is running
app.get('/contact', function(req,res){res.send('<a href=\'https://anonymous-oracle.github.io/profile\'>click here</a> to visit my profile')})

// app.listen(3000); // 3000 is a port
app.listen(3000, function() {console.log('server listening on port 3000')})

