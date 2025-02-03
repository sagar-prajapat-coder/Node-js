const express = require('express');
const { MongoClient, ObjectId } = require('mongodb'); // ✅ Import ObjectId
const db = require('./db'); 
const app = express();

app.use(express.json()); 

app.get('/', async (req, res) => {
    try {
        let data = await db();
        let result = await data.find().toArray();
        res.json(result);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.post('/', async (req, res) => {
    try {
        let data = await db();
        let inserted = await data.insertOne(req.body);
        console.log('Inserted:', inserted);
        res.json({ success: true, insertedId: inserted.insertedId });
    } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/user-detail/:id', async (req, res) => {  
    try {
        let data = await db(); 
        let userId = req.params.id; 
        if (!ObjectId.isValid(userId)) {
            return res.status(400).json({ error: 'Invalid User ID format' });
        }
        let user = await data.findOne({ _id: new ObjectId(userId) }); 
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user); 
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/user-delete/:id', async (req, res) => {  
    try {
        let data = await db(); 
        let userId = req.params.id; 
        if (!ObjectId.isValid(userId)) {
            return res.status(400).json({ error: 'Invalid User ID format' });
        }
        let user = await data.deleteOne({ _id: new ObjectId(userId) }); 
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ success: true, message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000'); // Correct port
});  