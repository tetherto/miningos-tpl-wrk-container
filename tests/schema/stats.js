'use strict'

module.exports = () => ({
  config_validate: {
    type: 'schema',
    schema: {
      success: { type: 'boolean' },
      config: {
        type: 'object',
        children: {}
      }
    }
  },
  stats_validate: {
    type: 'schema',
    schema: {
      success: { type: 'boolean' },
      stats: {
        type: 'object',
        children: {
          power_kw: { type: 'number', min: 0 },
          ambient_temp_c: { type: 'number', min: 0 },
          humidity_percent: { type: 'number', min: 0 },
          alarm_status: { type: 'boolean' }
        }
      }
    }
  }
})
