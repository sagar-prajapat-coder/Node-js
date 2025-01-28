const {MongoClient}  =  require('mongodb');
const url = 'mongodb+srv://sagarprajapat250:caz8G4qoEcrAqF1F@cluster0.l7p64.mongodb.net/retryWrites=true&w=majority&appName=Cluster0';
const database = 'testnodejs';
const client = new MongoClient(url);

async function dbConnect(){
   let result = await client.connect();
   let db = result.db(database);
   return  db.collection('users');
}

module.exports = dbConnect;