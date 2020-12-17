// TEMPLATE MONGODB DRIVER CONNECTION CODE

const { MongoClient } = require("mongodb");

// Connection URI
const uri = "mongodb://127.0.0.1:27017/?compressors=zlib&gssapiServiceName=mongodb"
// Create a new MongoClient
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const dbName = 'mongoDB';
const db;

async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    // Establish and verify connection
    await client.db(dbName).command({ ping: 1 });
    db = client.db(dbName);
    console.log("Connected successfully to server");

    // CRUD BEGINS
    const inserDocuments = function(db, callback){
        // get the documents collection
        const collection = db.collection('fruits');
        // insert some documents
        collection.insertMany([{a:1}, {a:2}, {a:3}]
        );
    };
} finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);



