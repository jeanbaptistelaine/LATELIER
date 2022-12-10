const { players } = require('../data/headtohead.json')
const NotFoundError = require('../errors/not-found')
const {
  calculateCountryStats,
  calculateAverageBMI,
  calculateMedianHeight,
} = require('../utils/stats')

const getPlayers = (req, res) => {
  res.status(200).json(players)
}

const getPlayer = (req, res) => {
  const { id: playerID } = req.params

  const player = players.find((player) => player.id === Number(playerID))
  if (!player) {
    throw new NotFoundError(`No player with id ${playerID}`)
  }

  res.status(200).json(player)
}

const getPlayersStats = (req, res) => {
  const countryStats = calculateCountryStats(players)
  const averagePlayersBMI = calculateAverageBMI(players)
  const medianPlayerHeight = calculateMedianHeight(players)

  res.status(200).json({
    medianPlayerHeight: medianPlayerHeight,
    averagePlayersBMI: averagePlayersBMI,
    countryStats: countryStats,
  })
}

module.exports = { getPlayers, getPlayer, getPlayersStats }
