const { median } = require('./utils')

const reducePlayersByCountry = (objectArray) => {
  //Returns a new array of object grouped by countries, containing only one flat array with list of all last matches
  return objectArray.reduce((acc, obj) => {
    const key = obj.country.code
    const curGroup = acc[key] ?? []

    return { ...acc, [key]: [...curGroup, ...obj.data.last] }
  }, {})
}

const processCountriesObject = (object) => {
  let returnObjectArray = []
  for (let country in object) {
    let win = 0
    let loss = 0
    const countryObj = object[country]
    countryObj.forEach((matchResult) => {
      if (matchResult === 1) {
        win++
      } else if (matchResult === 0) {
        loss++
      }
    })
    returnObjectArray.push({
      country: country,
      wins: win,
      losses: loss,
      ratio: win / (loss + win),
    })
  }

  return returnObjectArray.sort((a, b) => b.ratio - a.ratio)
}

const calculateCountryStats = (players) => {
  const countriesObject = reducePlayersByCountry(players)
  const countryStats = processCountriesObject(countriesObject)
  return countryStats
}

const calculateAverageBMI = (players) => {
  const sumBMC = players.reduce((a, b) => {
    let { weight, height } = b.data
    weight = weight / 1000 //convert to kg
    height = height / 100 //convert to m
    return a + weight / Math.pow(height, 2)
  }, 0)
  return sumBMC / players.length
}

const calculateMedianHeight = (players) => {
  const arrayHeight = players.map((player) => player.data.height / 100)
  return median(arrayHeight)
}

module.exports = {
  calculateCountryStats,
  calculateAverageBMI,
  calculateMedianHeight,
}
