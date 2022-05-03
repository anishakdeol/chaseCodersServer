const express = require('express');
const scoreController = require('../controllers/score.js')

const router = express.Router();

router.use(express.json());

router.get('/', scoreController.getAllScores)
router.post('/:username/:score',verifyToken, scoreController.addAllScores)
router.get('/all/leaderboard', scoreController.showLeaderboard)
router.post('/game', scoreController.setGame)

module.exports = router;
