// mongoose
const mongoose = require('mongoose');

// connection URL
const url = 'mongodb://127.0.0.1:27017';

mongoose.connect(url + '/documentDB', {useNewUrlParser: true, useUnifiedTopology: true});

// WRITING INTO DB

// // creates a basic template for documents
const documentSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

// // creates a template for the creation of the document 
const Document = mongoose.model('Document', documentSchema);
const document = new Document({name: 'abc', rating: 5, review:'good'});
// let docs = [{name: 'abc', rating: 5, review:'good'}, {name: 'cdf', rating: 10, review:'great'}, {name: 'vdv', rating: 1, review:'bad'}]

// Document.insertMany(docs, function(err){
//   if (err){
//     console.log(err);
//     } else {
//       console.log('inserted multiple documents into the DB');
//     }
// });

// // saves the document object and writes the data into the db
// document.save();

    
// const personSchema = new mongoose.Schema({
//   name: String,
//   age: Number
// });

// // DATA VALIDATION
// const personSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, "give me a name!!"]
//   },
//   age: {
//     type: Number,
//     min: 1,
//     max: 100
//   }
// });

// ESTABLISHING RELATIONSHIPS
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "give me a name!!"]
  },
  age: {
    type: Number,
    min: 1,
    max: 100
  },
  myDocument: documentSchema
});

const Person = mongoose.model('Person', personSchema);

const person = new Person({name:'abc', age:25, myDocument:document});

person.save();

// const persons = [{name: 'cef', age:54}, {name: 'dijsnc', age:6}, {name:'djwicn', age:98}]

// Person.insertMany(persons, function(err){
  // if (err){
  // console.log(err);
  // } else {
  //   console.log('inserted multiple people into the DB');
  // }
// });

// // READING FROM DB
// Person.find(function(err, people){
//   if (err){
//     console.log(err);
//     } else {

//       // closing the connection after the operation of the most recent operation
//       // mongoose.connection.close();
//       people.forEach(function(e){console.log(e.name);})
//     }
// })

// // UPDATING DB
// Person.updateOne({name:'abc'},{name:'abcd'}, function(err){
//   if (err){
//     console.log(err);
//     } else {
//       console.log('updated one');
//     }
// });

// // DELETING FROM DB
// Person.deleteOne({_id:'5fded4e8e4e77d25275b031a'}, function(err){
  // if (err){
  //   console.log(err);
  //   } else {
  //     console.log('deleted one');
  //   }
// });

// Person.deleteMany({age: {$gte: 25}}, function(err){
//   if (err){
//     console.log(err);
//     } else {
//       console.log('deleted many');
//     }
// }); 