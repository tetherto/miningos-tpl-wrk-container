'use strict'

module.exports = () => ({
  sockets_on_validate: {
    type: 'schema',
    schema: {
      success: { type: 'boolean', enum: [true] },
      stats: { type: 'object', children: {} }
    }
  },
  sockets_off_validate: {
    type: 'schema',
    schema: {
      success: { type: 'boolean', enum: [true] },
      stats: { type: 'object', children: {} }
    }
  },
  sockets_on_batch_validate: {
    type: 'schema',
    schema: {
      success: { type: 'boolean', enum: [true] },
      stats: { type: 'object', children: {} }
    }
  },
  sockets_off_batch_validate: {
    type: 'schema',
    schema: {
      success: { type: 'boolean', enum: [true] },
      stats: { type: 'object', children: {} }
    }
  }
})
