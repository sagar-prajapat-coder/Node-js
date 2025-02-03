const {MongoClient}  =  require('mongodb');
const url = 'mongodb+srv://sagareoxysit:kTEtpmkApEjgnjSQ@cluster0.qin7c.mongodb.net/';
const database = 'test';
const client = new MongoClient(url);

async function dbConnect(){
   let result = await client.connect();
   let db = result.db(database);
   return  db.collection('users');
}

module.exports = dbConnect; 