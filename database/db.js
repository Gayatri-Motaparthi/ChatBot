const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://Gayatri:Gayatri@cluster0.knoey6m.mongodb.net/';

let db = mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

db = mongoose.connection

db.once('open', () => {
    console.log('Connected to MongoDB');
});

db.on('error', (err) => {
    console.error('Error connecting to MongoDB:', err);
});

module.exports = db;
