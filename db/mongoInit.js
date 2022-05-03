require("dotenv").config();

const { MongoClient } = require("mongodb");

const init = async () => {
const uri = `mongodb://user:password@db:27017`;
const mongoClient = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


  
};

module.exports = { init };
