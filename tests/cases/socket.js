'use strict'

const path = require('path')
const { getSchema } = require(path.join(process.cwd(), 'tests/utils'))
const { getSnapExecutor, switchSocketExecutor } = require('../executors')
const defaults = getSchema()

module.exports = () => ({
  switchSocketOnBatch: {
    stages: [
      {
        name: 'switchSocket on',
        executor: switchSocketExecutor([[0, 1, true], [1, 2, true]]),
        validate: defaults.success_validate
      },
      {
        name: 'check if specified sockets are on',
        executor: getSnapExecutor,
        validate: defaults.sockets_on_batch_validate
      }
    ]
  },
  switchSocketOffBatch: {
    stages: [
      {
        name: 'switchSocket off',
        executor: switchSocketExecutor([[0, 1, false], [1, 2, false]]),
        validate: defaults.success_validate
      },
      {
        name: 'check if specified sockets are off',
        executor: getSnapExecutor,
        validate: defaults.sockets_off_batch_validate
      }
    ]
  }
})
