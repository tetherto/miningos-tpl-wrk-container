'use strict'

async function getSnapExecutor ({ dev }) {
  return await dev.getSnap()
}

function switchSocketExecutor (...args) {
  return async ({ dev }) => {
    return await dev.switchSocket(...args)
  }
}

function switchCoolingSystemExecutor (state) {
  return async ({ dev }) => {
    return await dev.switchCoolingSystem(state)
  }
}

module.exports = {
  getSnapExecutor,
  switchSocketExecutor,
  switchCoolingSystemExecutor
}
