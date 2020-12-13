const { urlencoded } = require('body-parser');
const express = require('express');
const https = require('https');

const app = express();

app.use(express.urlencoded({extended:true}))

// app.get('/', function(req, res){
//     const url = "https://api.openweathermap.org/data/2.5/weather?q=Bengaluru&appid=<insert-auth-token-from-openweatheraccount>&units=metric";
//     // the https get method takes a callback where only the response is sent back
//     https.get(url, function(resHttps){
//         // console.log(resHttps);
//         // resHttps.on('data',function(data){console.log(JSON.parse(data))})
//         resHttps.on('data',function(data){
//             const weatherData = JSON.parse(data)
//             const imageURL = "https://openweathermap.org/img/wn/"+weatherData.weather[0].icon+"@2x.png"
//             // console.log(weatherDescription)
//             res.write('<h2>'+weatherData.weather[0].description+' weather</h2>')
//             res.write('<h3>the temperature in bangalore is '+weatherData.main.temp+'\'C</h3>')
//             res.write("<img src="+imageURL+">");
//             res.send()
//         })
//     })
//     // res.send("server is running...")
// })


app.get('/',function(req, res){
    res.sendFile(__dirname+'/index.html')
})


app.post('/',function(req, res){
    
    const cityName = req.body['cityName']
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=<insert-auth-token-from-openweatheraccount>&units=metric';
    https.get(url,function(httpResponse){
        httpResponse.on('data', function(data){
            const weatherData = JSON.parse(data)
            const imageURL = "https://openweathermap.org/img/wn/"+weatherData.weather[0].icon+"@2x.png"
            // .write() writes the data into a buffer and sends it all together
            // console.log(weatherData)
            res.write('<h2>How it looks: '+weatherData.weather[0].description+'</h2>')
            res.write('<h3>the temperature in '+weatherData.name+' is '+weatherData.main.temp+'\'C</h3>')
            res.write("<img src="+imageURL+">");
            res.send()
        })

    })
})

















app.listen(3000,function(){
    console.log('server running on port')
})