const redisPresetSetup = require('jest-redis/src/setup')
const mongoPresetSetup = require('@shelf/jest-mongodb/setup')

module.exports = () => {
  return Promise.all([
    redisPresetSetup(),
    mongoPresetSetup()
  ])
}
