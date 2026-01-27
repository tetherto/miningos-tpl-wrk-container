'use strict'

const { test } = require('brittle')
const BaseContainer = require('../../workers/lib/base')

test('BaseContainer constructor', (t) => {
  const container = new BaseContainer()
  t.ok(container, 'should create BaseContainer instance')
  t.is(container.constructor.name, 'BaseContainer', 'should have correct class name')
})

test('BaseContainer constructor with options', (t) => {
  const opts = { test: 'value' }
  const container = new BaseContainer(opts)
  t.ok(container, 'should create BaseContainer instance with options')
})

test('validateWriteAction - switchContainer valid', (t) => {
  const container = new BaseContainer()
  const result = container.validateWriteAction('switchContainer', true)
  t.is(result, 1, 'should return 1 for valid switchContainer call')
})

test('validateWriteAction - switchContainer invalid enabled type', (t) => {
  const container = new BaseContainer()
  try {
    container.validateWriteAction('switchContainer', 'true')
    t.fail('should throw error for invalid enabled type')
  } catch (err) {
    t.ok(err.message.includes('ERR_SWITCH_CONTAINER_ENABLED_INVALID'), 'should throw error for invalid enabled type')
  }
})

test('validateWriteAction - switchContainer invalid enabled type number', (t) => {
  const container = new BaseContainer()
  try {
    container.validateWriteAction('switchContainer', 1)
    t.fail('should throw error for number enabled type')
  } catch (err) {
    t.ok(err.message.includes('ERR_SWITCH_CONTAINER_ENABLED_INVALID'), 'should throw error for number enabled type')
  }
})

test('validateWriteAction - switchSocket valid single', (t) => {
  const container = new BaseContainer()
  const result = container.validateWriteAction('switchSocket', [['pdu1', 'socket1', true]])
  t.is(result, 1, 'should return 1 for valid switchSocket call')
})

test('validateWriteAction - switchSocket valid batch', (t) => {
  const container = new BaseContainer()
  const result = container.validateWriteAction('switchSocket', [['pdu1', 'socket1', true], ['pdu2', 'socket2', false]])
  t.is(result, 1, 'should return 1 for valid batch switchSocket call')
})

test('validateWriteAction - switchSocket invalid pduIndex type', (t) => {
  const container = new BaseContainer()
  try {
    container.validateWriteAction('switchSocket', [[1, 'socket1', true]])
    t.fail('should throw error for invalid pduIndex type')
  } catch (err) {
    t.ok(err.message.includes('ERR_SWITCH_SOCKET_PDU_INDEX_INVALID'), 'should throw error for invalid pduIndex type')
  }
})

test('validateWriteAction - switchSocket invalid socketIndex type', (t) => {
  const container = new BaseContainer()
  try {
    container.validateWriteAction('switchSocket', [['pdu1', 1, true]])
    t.fail('should throw error for invalid socketIndex type')
  } catch (err) {
    t.ok(err.message.includes('ERR_SWITCH_SOCKET_SOCKET_INDEX_INVALID'), 'should throw error for invalid socketIndex type')
  }
})

test('validateWriteAction - switchSocket invalid enabled type', (t) => {
  const container = new BaseContainer()
  try {
    container.validateWriteAction('switchSocket', [['pdu1', 'socket1', 'true']])
    t.fail('should throw error for invalid enabled type')
  } catch (err) {
    t.ok(err.message.includes('ERR_SWITCH_SOCKET_ENABLED_INVALID'), 'should throw error for invalid enabled type')
  }
})

test('validateWriteAction - switchSocket invalid args not array', (t) => {
  const container = new BaseContainer()
  try {
    container.validateWriteAction('switchSocket', 'not-array')
    t.fail('should throw error for non-array args')
  } catch (err) {
    t.ok(err.message.includes('ERR_SWITCH_SOCKET_ARGS_INVALID'), 'should throw error for non-array args')
  }
})

test('validateWriteAction - switchCoolingSystem valid', (t) => {
  const container = new BaseContainer()
  const result = container.validateWriteAction('switchCoolingSystem', true)
  t.is(result, 1, 'should return 1 for valid switchCoolingSystem call')
})

test('validateWriteAction - switchCoolingSystem invalid enabled type', (t) => {
  const container = new BaseContainer()
  try {
    container.validateWriteAction('switchCoolingSystem', 'true')
    t.fail('should throw error for invalid enabled type')
  } catch (err) {
    t.ok(err.message.includes('ERR_SWITCH_COOLING_SYSTEM_ENABLED_INVALID'), 'should throw error for invalid enabled type')
  }
})

test('validateWriteAction - unknown action', (t) => {
  const container = new BaseContainer()
  const result = container.validateWriteAction('unknownAction', 'arg1', 'arg2')
  t.is(result, 1, 'should return 1 for unknown action (no validation)')
})

test('turnOnContainer throws ERR_NO_IMPL', async (t) => {
  const container = new BaseContainer()
  try {
    await container.turnOnContainer()
    t.fail('should throw ERR_NO_IMPL')
  } catch (err) {
    t.ok(err.message.includes('ERR_NO_IMPL'), 'should throw ERR_NO_IMPL')
  }
})

test('turnOffContainer throws ERR_NO_IMPL', async (t) => {
  const container = new BaseContainer()
  try {
    await container.turnOffContainer()
    t.fail('should throw ERR_NO_IMPL')
  } catch (err) {
    t.ok(err.message.includes('ERR_NO_IMPL'), 'should throw ERR_NO_IMPL')
  }
})

test('switchContainer throws ERR_NO_IMPL', async (t) => {
  const container = new BaseContainer()
  try {
    await container.switchContainer(true)
    t.fail('should throw ERR_NO_IMPL')
  } catch (err) {
    t.ok(err.message.includes('ERR_NO_IMPL'), 'should throw ERR_NO_IMPL')
  }
})

test('switchCoolingSystem throws ERR_NO_IMPL', async (t) => {
  const container = new BaseContainer()
  try {
    await container.switchCoolingSystem(true)
    t.fail('should throw ERR_NO_IMPL')
  } catch (err) {
    t.ok(err.message.includes('ERR_NO_IMPL'), 'should throw ERR_NO_IMPL')
  }
})

test('switchSocket throws ERR_NO_IMPL', async (t) => {
  const container = new BaseContainer()
  try {
    await container.switchSocket([])
    t.fail('should throw ERR_NO_IMPL')
  } catch (err) {
    t.ok(err.message.includes('ERR_NO_IMPL'), 'should throw ERR_NO_IMPL')
  }
})

test('turnOnCoolingSystem throws ERR_NO_IMPL', async (t) => {
  const container = new BaseContainer()
  try {
    await container.turnOnCoolingSystem()
    t.fail('should throw ERR_NO_IMPL')
  } catch (err) {
    t.ok(err.message.includes('ERR_NO_IMPL'), 'should throw ERR_NO_IMPL')
  }
})

test('turnOffCoolingSystem throws ERR_NO_IMPL', async (t) => {
  const container = new BaseContainer()
  try {
    await container.turnOffCoolingSystem()
    t.fail('should throw ERR_NO_IMPL')
  } catch (err) {
    t.ok(err.message.includes('ERR_NO_IMPL'), 'should throw ERR_NO_IMPL')
  }
})

test('resetAlarm throws ERR_NO_IMPL', async (t) => {
  const container = new BaseContainer()
  try {
    await container.resetAlarm()
    t.fail('should throw ERR_NO_IMPL')
  } catch (err) {
    t.ok(err.message.includes('ERR_NO_IMPL'), 'should throw ERR_NO_IMPL')
  }
})
