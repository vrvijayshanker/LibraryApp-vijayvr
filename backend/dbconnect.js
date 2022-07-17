const mongoose  = require('mongoose');
const URL = 'mongodb+srv://vijayvr:admin@cluster1.zt8bq.mongodb.net/libapp?retryWrites=true&w=majority';

function init() {
    mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const connection = mongoose.connection;
    connection.on('error', () => {
        console.log('Error in DB connection');
    });

    connection.on('open', () => {
        console.log('DB Connection successful!');
    });
}

module.exports = {
    init,
}