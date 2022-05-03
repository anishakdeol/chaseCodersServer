require("dotenv").config();

const { MongoClient } = require("mongodb");

const connectionUrl = process.env.DB_CONNECTION;
const dbName = process.env.DB_NAME;

const init = async () => {
  
  const client = new MongoClient(connectionUrl);
  await client.connect()
  console.log(`Connected to database ${dbName}.`);
  return client.db(dbName);
};

module.exports = { init };
