'use strict'

module.exports = () => ({
  cooling_system_on_validate: {
    type: 'schema',
    schema: {
      success: { type: 'boolean', enum: [true] },
      stats: { type: 'object', children: {} }
    }
  },
  cooling_system_off_validate: {
    type: 'schema',
    schema: {
      success: { type: 'boolean', enum: [true] },
      stats: { type: 'object', children: {} }
    }
  }
})
