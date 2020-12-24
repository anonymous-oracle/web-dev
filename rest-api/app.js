const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/wikidb', {useNewUrlParser: true, useUnifiedTopology: true});

const articleSchema = {
    title: String,
    content: String
};

const Article = mongoose.model('Article', articleSchema);


// app.get('/articles', function(req, res){
//     Article.find({}, function(err, found){
//         console.log(found);
//         res.send(found);
//     })
// });

// app.post('/articles', function(req, res){
//     console.log(req.body.title);
//     console.log(req.body.content);
//     const newArticle = new Article({
//         title: req.body.title, 
//         content: req.body.content});
//     newArticle.save(function(err){
//         if (err){res.send(err)}
//         else {res.send('document saved!')};
//     });
// });

// deleting
// app.delete('/articles', function(req, res){
//     Article.deleteMany({}, function(err){
//         if (err){res.send(err)}
//         else {res.send('documents deleted!')};
//     });
// });

// chained route handlers
app.route('/articles')
.get(function(req, res){
    Article.find({}, function(err, found){
        console.log(found);
        res.send(found);
    })})

.post(function(req, res){
    console.log(req.body.title);
    console.log(req.body.content);
    const newArticle = new Article({
        title: req.body.title, 
        content: req.body.content});
    newArticle.save(function(err){
        if (err){res.send(err)}
        else {res.send('document saved!')};
    });})

.delete(function(req, res){
    Article.deleteMany({}, function(err){
        if (err){res.send(err)}
        else {res.send('documents deleted!')};
    });});


app.route('/articles/:articleTitle')
.get(function(req, res){
    Article.findOne({title: req.params.articleTitle}, function(err, found){
        if (err){
            res.send('not found');
        } else{
            console.log(found);
            res.send(found);
        }
    })})

.post(function(req, res){
    console.log(req.body.title);
    console.log(req.body.content);
    const newArticle = new Article({
        title: req.body.title, 
        content: req.body.content});
    newArticle.save(function(err){
        if (err){res.send(err)}
        else {res.send('document saved!')};
    });})
    
.delete(function(req, res){
    Article.deleteOne({title: req.params.articleTitle}, function(err){
        if (err){res.send(err)}
        else {res.send('document deleted')};
    });})
.put(function(req, res){
Article.update({title: req.params.articleTitle},
    {title: req.body.title, content: req.body.content},
    {overwrite: true},
    function(err){
        if (!err){
            res.send('successfully updated');
        }
    })
})
.patch(function(req, res){
    Article.update({title: req.params.articleTitle},
        {$set: {content: req.body.content}},
        function(err){
            if (!err){
                res.send('successfully updated');
            }
        }) 
})



app.listen(3000, function(){
    console.log('server started on port 3000');
});