const express = require('express');
const request = require('request');
const https = require('https');
const mongoose = require('mongoose');

const app = express();
app.use(express.urlencoded({extended: true}));



app.use(express.static('public'));

// using ejs templating
// NOTE: for ejs templating use this project as a tutorial guide
app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://suhas-admin:test123@cluster0.dg7m8.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

const itemSchema = {
    name: String
};

const Item = mongoose.model('Item', itemSchema);

// CREATE DEFAULT DOCUMENTS FOR THE TO DO LIST
const item1 = new Item({name: 'Welcome to your todo list'});
const item2 = new Item({name: 'Hit the + button to add a new item'});
const item3 = new Item({name: '<-- check this box to delete an item'});

const defaultItems = [item1, item2, item3];

const listSchema = {
name: String,
items: [itemSchema]
};

const List = mongoose.model('List', listSchema);

// once the views folder is created with all templates, the files inside should be mentioned using filepaths relative to the views folder
// let listItems = ['task 1', 'task 2', 'task 3'];
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

    Item.find({}, function(err, foundItems){
        if (foundItems.length===0){
            Item.insertMany(defaultItems, function(err){
                if (err){
                    console.log(err);
                } else {
                    console.log('successfully saved default items to DB');
                };
            });
            // once the items are added, the app redirects back to this route but this time the 'if' condition will be false
            // because the data was added back again and the else block executes
            res.redirect('/');
        } else {
        res.render('list', {listTitle: 'Today', newListItems: foundItems});
        }
    }); 
});

app.get('/:newList', function(req, res){
    const customList = req.params.newList.replace(/ /g,'-').toLowerCase();    
    List.findOne({name:customList}, function(err, found){
        if (err){
            console.log(err);
        } else {
            if (found){
                res.render('list',{listTitle: found.name, newListItems: found.items});
            } else {
                const list = new List({name: customList, items: defaultItems});
                list.save();
                res.redirect('/' + customList);
            }
        };
    });
});

app.post('/', (req, res)=> {
    // if (req.body.list === 'Work'){
    //     workItems.push(req.body.newItem);
    //     res.redirect('/work');
    // } else {
    //     listItems.push(req.body.newItem);
    //     res.redirect('/');
    // }

    const itemName = req.body.newItem;
    const listName = req.body.list.replace(/ /g,'-').toLowerCase();
    const newDoc = new Item({name: itemName});
    if(listName==='Today'){
        newDoc.save();
        res.redirect('/');
    } else {
        List.findOne({name: listName}, function(err, found){
            found.items.push(newDoc);
            found.save();
            res.redirect('/'+listName);
        });
    };
});

app.get('/work', function(req, res){
    res.render('list', {listTitle: 'Work List', newListItems: workItems});
});

app.post('/work', function(req, res){
    workItems.push(req.body.newItem);
    res.redirect('/work');
});

app.get('/about', function(req, res){
    res.render('about');
});


app.post('/delete', function(req, res){
    const checkedItemID = req.body.checkBox;
    const listName = req.body.listName.replace(/ /g,'-').toLowerCase();

    if(listName==='Today'){
        Item.deleteOne({_id: checkedItemID}, function(err){
            if (err){
                console.log(err);
            } else {
                console.log('checked item: '+checkedItemID+' removed');
            }
        });
        res.redirect('/');
    } else {
        List.findOneAndUpdate({name: listName}, {$pull: {items: {_id: checkedItemID}}}, function(err, foundList){
            if(!err){
                res.redirect('/'+listName);
            }
        });
    }


    
});

let port = process.env.PORT;
if (port == null || port == ""){
    port = 3000;
};

app.listen(port,function(){console.log(__filename+' running on PORT '+port)});