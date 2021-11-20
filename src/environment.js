const NodeEnvironment = require('jest-environment-node')
const RedisEnvironment = require('jest-redis/src/environment')
const MongoEnvironment = require('@shelf/jest-mongodb/environment')

module.exports = class BiostampEnvironment extends NodeEnvironment {
  constructor(config) {
    this.redisEnv = new RedisEnvironment(config)
    this.mongoEnv = new MongoEnvironment(config)
    super(config)
  }

  async setup() {
    await Promise.all([
      this.redisEnv.setup(),
      this.mongoEnv.setup(),
    ])

    await super.setup()
  }

  async teardown() {
    await Promise.all([
      this.redisEnv.teardown(),
      this.mongoEnv.teardown(),
    ])

    await super.teardown()
  }

  runScript(script) {
    return super.runScript(script)
  }
}
