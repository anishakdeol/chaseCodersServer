const Score = require('../models/Score')

async function getAllScores(req,res){
    try {
        const scores = await Score.getAllScores();
        res.status(200).json(scores);
        
    } catch(e){
        res.status(500).send({e:"Scores not found"})
    }
}
async function showLeaderboard(req,res){
    try {
        const leaderboard = await Score.showLeaderboard();
        res.status(200).json(leaderboard);
    }   catch(e){
        res.status(500).send({e:"Leaderboard not found"})
    }
}

async function addAllScores(req, res) {
    try {
      const game = await Game.scoreAdder(req.params.username, req.params.score);
      res.status(200).json(game);
    } catch (e) {
      res.status(500).send({ e: "Cannot append score" });
    }
  }

  async function setGame(req, res) {
    try {
      const { categoryId, difficulty, range } = req.params;
      const newgame = await Game.setGame(categoryId, difficulty, range);
  
      res.status(200).json(newgame);
    } catch (e) {
      res.status(500).send({ e: "Cannot start the game!" });
    }
  }

async function setAnswer(){

}

module.exports = {
    showLeaderboard, 
    getAllScores, 
    addAllScores,  
    setAnswer,
    setGame}
