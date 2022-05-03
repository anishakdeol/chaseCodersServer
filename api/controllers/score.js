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
async function addAllScores

module.exports = {showLeaderboard, getAllScores, addAllScores}
