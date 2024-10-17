const mongoose = require('mongoose');
const DATABASE_URL = process.env.DATABASE_URL;

mongoose.set('strictQuery', false);

const dbConnection = async () => {
  await mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.on('error', error => console.log(error));
  db.once('open', () => console.log('connection to MongoDB established'));
};

module.exports = { mongoose, dbConnection };
