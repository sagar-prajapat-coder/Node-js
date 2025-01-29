const mongoose = require("mongoose");

// Corrected MongoDB Atlas URI
const uri = "mongodb+srv://sagarprajapat250:caz8G4qoEcrAqF1F@cluster0.l7p64.mongodb.net/mydatabase?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch(err => console.error("MongoDB Connection Error:", err));

// Define a function to access the 'users' collection
async function dbConnect() {
   try {
      const db = mongoose.connection;
      return db.collection("users"); // Get 'users' collection
   } catch (error) {
      console.error("Error connecting to database:", error);
   }
}

module.exports = dbConnect;
