const { init } = require("../db/mongoInit.js");
const axios = require("axios");

class Score {
    constructor(data){
        this.id = data.id,
        this.username = data.username,
        this.score = data.score;
    }
}

static get getAllScores() {
    return new Promise(async (resolve, reject) => {
      try {
        let db = await init();
        let results = await db.collection("highscore").find({}).toArray();
        resolve(results);
      } catch (err) {
        reject("Cannot retreive any games, please try again");
      }
    });
  }

  static addAllScores(username, userScore) {
    return new Promise(async (resolve, reject) => {
      try {
        let db = await init();
        let results = await db
          .collection("highscore")
          .find({ name: username })
          .toArray();

        // If the user already exists in the database, it will update the user's score
        // If the user does not exist, it will create a new user and add their score
        if (results.length) {
          // This finds a user and then increments the score using $inc
          let results = await db
            .collection("highscore")
            .updateOne(
              { name: username },
              { $inc: { score: parseInt(userScore) } }
            );
          resolve(results);
        } else {
          let addPlayer = await db
            .collection("highscore")
            .insertOne({ name: username, score: parseInt(userScore) });
          resolve(addPlayer);
        }
      } catch (err) {
        reject(`Error creating game: ${err.message}`);
      }
    });
  }

  static showLeaderboard() {
    return new Promise(async (resolve, reject) => {
      try {
        let db = await init();
        let leaderboard = await db.collection("highscore").find({}).toArray();
        resolve(leaderboard);
      } catch (err) {
        reject("Cannot retreive a leaderboard!", err);
      }
    });
  }

module.exports = Score;
