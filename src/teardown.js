const redisPresetTeardown = require('jest-redis/src/teardown')
const mongoPresetTeardown = require('@shelf/jest-mongodb/teardown')

module.exports = () => {
  return Promise.all([
    redisPresetTeardown(),
    mongoPresetTeardown()
  ])
}
