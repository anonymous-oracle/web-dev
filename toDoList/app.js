const express = require('express');
const request = require('request');
const https = require('https');

const app = express();
app.use(express.urlencoded({extended: true}));
let items = ['Buy Food', 'Cook Food', 'Eat Food'];
let workItems = [];

app.use(express.static('public'));

// using ejs templating
// NOTE: for ejs templating use this project as a tutorial guide
app.set('view engine', 'ejs');



// once the views folder is created with all templates, the files inside should be mentioned using filepaths relative to the views folder
let listItems = ['task 1', 'task 2', 'task 3'];
app.get('/', function (req, res) {
    let today = new Date();
    let day;
    // let currentDay = today.getDay();

    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    day = today.toLocaleDateString('en-US', options);

    res.render('list', {listTitle:day, newListItems: listItems});
});

app.post('/', (req, res)=> {
    if (req.body.list === 'Work'){
        workItems.push(req.body.newItem);
        res.redirect('/work');
    } else {
        listItems.push(req.body.newItem);
        res.redirect('/');
    }
});

app.get('/work', function(req, res){
    res.render('list', {listTitle: 'Work List', newListItems: workItems});
});

app.post('/work', function(req, res){
    workItems.push(req.body.newItem);
    res.redirect('/work');
})

app.get('/about', function(req, res){
    res.render('about');
})






app.listen(3000,function(){console.log(__filename+' running on PORT 3000')});