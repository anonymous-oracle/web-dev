//jshint esversion:6
require('dotenv').config();
const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const encrypt = require('mongoose-encryption');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/userdb', {useNewUrlParser: true, useUnifiedTopology: true});

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

// create an encryption scheme
userSchema.plugin(encrypt, {secret: process.env.SECRET, encryptedFields: ['password']});

const User = mongoose.model('User', userSchema);

app.get('/', function(req, res){
    res.render('home');
});

app.get('/login', function(req, res){
    res.render('login');
});

app.get('/register', function(req, res){
    res.render('register');
});

app.post('/register', function(req, res){
    const newUser = new User({
        email: req.body.username,
        password: req.body.password
    });

    newUser.save(function(err){
        if (err){
            console.log(err);
            res.send(err);
        } else {
            res.render('secrets');
        }
    });
});

app.post('/login', function(req, res){
    const email = req.body.email;
    const password = req.body.password;

// mongoose will automatically decrypt the password field
    User.findOne({email: email}, function(err, found){
        if (err){
            console.log(err);
        } else {
            if (found){
                if (found.password === password){
                    res.render('secrets');
                }
            }
        }
    })
});




// running the server
app.listen(3000, function(){
    console.log('server started on port 3000');
});