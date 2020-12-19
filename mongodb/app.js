// TEMPLATE MONGODB DRIVER CONNECTION CODE

const { MongoClient } = require("mongodb");
const assert = require('assert');

// Connection URI
const uri = "mongodb://127.0.0.1:27017/?compressors=zlib&gssapiServiceName=mongodb"
// Create a new MongoClient
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const dbName = 'mongoDB';
// const db;


// Connect the client to the server
client.connect(function(err){
  assert.strictEqual(null, err);
  console.log('connected successfully to the server');
  const db = client.db(dbName);


  // // use insert function whenever necessary to insert
  // inserDocuments(db, function() {
  // });
  findDocuments(db, function(){
    client.close();
  })
});


// CRUD BEGINS
const inserDocuments = function(db, callback){
// get the documents collection
const collection = db.collection('document');
// insert some documents
collection.insertMany([{a:1, b:10}, {a:2, b:20}, {a:3, b:30}], function(err, result) {
  assert.strictEqual(err, null);
  assert.strictEqual(3, result.result.n);
  assert.strictEqual(3, result.ops.length);
  console.log('inserted 3 documents into collection');
  callback(result);
});
};

const findDocuments = function(db, callback){
  // get the documents collection
  const collection = db.collection('document');
  // find some documents
  collection.find({}).toArray(function(err, docs){
    assert.strictEqual(err, null);
    console.log('found the following records');
    console.log(docs);
    callback(docs);
  });
};