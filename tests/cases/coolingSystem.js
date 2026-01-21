'use strict'

const path = require('path')
const { switchCoolingSystemExecutor, getSnapExecutor } = require('../executors')
const { getSchema } = require(path.join(process.cwd(), 'tests/utils'))
const defaults = getSchema()

module.exports = () => ({
  switchCoolingSystemOn: {
    stages: [
      {
        name: 'switchCoolingSystem on',
        executor: switchCoolingSystemExecutor(true),
        validate: defaults.success_validate
      },
      {
        name: 'check if cooling system is on',
        executor: getSnapExecutor,
        validate: defaults.cooling_system_on_validate
      }
    ]
  },
  switchCoolingSystemOff: {
    stages: [
      {
        name: 'switchCoolingSystem off',
        executor: switchCoolingSystemExecutor(false),
        validate: defaults.success_validate
      },
      {
        name: 'check if cooling system is off',
        executor: getSnapExecutor,
        validate: defaults.cooling_system_off_validate
      }
    ]
  }
})
