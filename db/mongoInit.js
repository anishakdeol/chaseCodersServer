require("dotenv").config();

const { MongoClient } = require("mongodb");

const init = async () => {
const uri = `mongodb://user:password@db:27017`;
const mongoClient = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbName = process.env.NODE_ENV == "test" ? "quiz_dbtest" : "quiz_db";
  try {
    let client = await mongoClient.connect();
    return client.db(dbName);
  } catch (error) {
    console.log(error);
  }

};

module.exports = { init };
