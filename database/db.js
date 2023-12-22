const mongoose = require('mongoose');

// Your MongoDB connection string
// const connectionString = 'mongodb+srv://gayatriMotaparthi:LearnFlask123@cluster0.l8cnhl0.mongodb.net/db?retryWrites=true&w=majority/chatbot';
const connectionString = 'mongodb+srv://Gayatri:Gayatri@cluster0.knoey6m.mongodb.net/';


// Create the Mongoose connection instance
// const db = mongoose.createConnection(connectionString, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

let db = mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

db = mongoose.connection;

// Event listeners for connection events
db.once('open', () => {
    console.log('Connected to MongoDB');
});

db.on('error', (err) => {
    console.error('Error connecting to MongoDB:', err);
});

// Export the Mongoose connection instance
module.exports = db;
