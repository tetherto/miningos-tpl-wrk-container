'use strict'

const { test } = require('brittle')
const alerts = require('../../workers/lib/alerts')

test('alerts module exports libAlerts', (t) => {
  t.ok(alerts, 'should export alerts module')
  t.ok(alerts.specs, 'should have specs property')
})

test('alerts has container_default specs', (t) => {
  t.ok(alerts.specs.container_default, 'should have container_default specs')
})

test('container_default specs inherit from default', (t) => {
  t.ok(alerts.specs.default, 'should have default specs')
  t.alike(alerts.specs.container_default, alerts.specs.default, 'container_default should equal default specs')
})

test('container_default specs are properly structured', (t) => {
  const containerSpecs = alerts.specs.container_default

  // Check that it's an object with expected structure
  t.is(typeof containerSpecs, 'object', 'container_default should be an object')
  t.ok(containerSpecs !== null, 'container_default should not be null')
})

test('alerts specs are mutable', (t) => {
  const originalContainerSpecs = alerts.specs.container_default

  // JavaScript objects are mutable by default
  alerts.specs.container_default = { test: 'value' }

  t.not(alerts.specs.container_default, originalContainerSpecs, 'should allow modification of specs')

  // Restore original
  alerts.specs.container_default = originalContainerSpecs
})

test('alerts module has expected structure', (t) => {
  t.ok(typeof alerts, 'object', 'alerts should be an object')
  t.ok(alerts.specs, 'should have specs property')
  t.is(typeof alerts.specs, 'object', 'specs should be an object')
})

test('container_default is reference to default', (t) => {
  // They should be the same reference initially
  t.is(alerts.specs.container_default, alerts.specs.default, 'container_default should be the same reference as default')
})
