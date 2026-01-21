'use strict'

const async = require('async')
const WrkRack = require('miningos-tpl-wrk-thing/workers/rack.thing.wrk')

class WrkContainerRack extends WrkRack {
  init () {
    super.init()

    // include additional stat timeframes
    this.scheduleAddlStatTfs = [
      ['1m', '0 */1 * * * *'],
      ['20s', '*/20 * * * * *'],
      ['rtd', '*/30 * * * * *']
    ]
  }

  _start (cb) {
    async.series([
      (next) => { super._start(next) },
      (next) => {
        this._addWhitelistedActions([
          ['switchContainer', 1], // [action, reqVotes]
          ['switchSocket', 1],
          ['switchCoolingSystem', 1]
        ])
        next()
      }
    ], cb)
  }

  getThingType () {
    return 'container'
  }

  _getThingBaseType () {
    return 'container'
  }
}

module.exports = WrkContainerRack
