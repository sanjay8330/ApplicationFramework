const {MongoClient} = require('mongodb');

/***Setting up the client */
const client = new MongoClient('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

/***Checking the connection of client to mongoDB */
client.connect(err => {
    if (err) {
        console.error(err);
        process.exit(-1);
    }
    console.log('Successfully connected to Mongo DB');
});

module.exports = client;