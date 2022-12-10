const express = require('express')

const router = express.Router()

const {
  getPlayers,
  getPlayer,
  getPlayersStats,
} = require('../controllers/player')

router.route('/players').get(getPlayers)
router.route('/players/:id').get(getPlayer)
router.route('/stats').get(getPlayersStats)

module.exports = router
