'use strict'

const { test } = require('brittle')
const stats = require('../../workers/lib/stats')

test('stats module exports libStats', (t) => {
  t.ok(stats, 'should export stats module')
  t.ok(stats.specs, 'should have specs property')
})

test('stats has container_default specs', (t) => {
  t.ok(stats.specs.container_default, 'should have container_default specs')
  t.ok(stats.specs.container_default.ops, 'should have ops in container_default specs')
})

test('container_default ops structure', (t) => {
  const { ops } = stats.specs.container_default

  t.ok(ops.container_status, 'should have container_status op')
  t.ok(ops.container_power_w_sum, 'should have container_power_w_sum op')
  t.ok(ops.container_power_w, 'should have container_power_w op')
  t.ok(ops.container_nominal_hashrate_mhs_sum, 'should have container_nominal_hashrate_mhs_sum op')
  t.ok(ops.container_nominal_hashrate_mhs_avg, 'should have container_nominal_hashrate_mhs_avg op')
  t.ok(ops.container_nominal_efficiency_w_ths_avg, 'should have container_nominal_efficiency_w_ths_avg op')
  t.ok(ops.container_nominal_miner_capacity_sum, 'should have container_nominal_miner_capacity_sum op')
})

test('container_status op configuration', (t) => {
  const { ops } = stats.specs.container_default

  t.is(ops.container_status.op, 'group', 'container_status should be group op')
  t.is(ops.container_status.src, 'last.snap.stats.status', 'container_status should have correct src')
  t.ok(ops.container_status.group, 'container_status should have group function')
})

test('container_power_w_sum op configuration', (t) => {
  const { ops } = stats.specs.container_default

  t.is(ops.container_power_w_sum.op, 'sum', 'container_power_w_sum should be sum op')
  t.is(ops.container_power_w_sum.src, 'last.snap.stats.power_w', 'container_power_w_sum should have correct src')
})

test('container_power_w op configuration', (t) => {
  const { ops } = stats.specs.container_default

  t.is(ops.container_power_w.op, 'group', 'container_power_w should be group op')
  t.is(ops.container_power_w.src, 'last.snap.stats.power_w', 'container_power_w should have correct src')
  t.ok(ops.container_power_w.group, 'container_power_w should have group function')
})

test('container_nominal_hashrate_mhs_sum op configuration', (t) => {
  const { ops } = stats.specs.container_default

  t.is(ops.container_nominal_hashrate_mhs_sum.op, 'sum', 'container_nominal_hashrate_mhs_sum should be sum op')
  t.is(ops.container_nominal_hashrate_mhs_sum.src, 'info.nominalHashrateMhs', 'container_nominal_hashrate_mhs_sum should have correct src')
})

test('container_nominal_hashrate_mhs_avg op configuration', (t) => {
  const { ops } = stats.specs.container_default

  t.is(ops.container_nominal_hashrate_mhs_avg.op, 'avg', 'container_nominal_hashrate_mhs_avg should be avg op')
  t.is(ops.container_nominal_hashrate_mhs_avg.src, 'info.nominalHashrateMhs', 'container_nominal_hashrate_mhs_avg should have correct src')
})

test('container_nominal_efficiency_w_ths_avg op configuration', (t) => {
  const { ops } = stats.specs.container_default

  t.is(ops.container_nominal_efficiency_w_ths_avg.op, 'avg', 'container_nominal_efficiency_w_ths_avg should be avg op')
  t.is(ops.container_nominal_efficiency_w_ths_avg.src, 'info.nominalEfficiencyWThs', 'container_nominal_efficiency_w_ths_avg should have correct src')
})

test('container_nominal_miner_capacity_sum op configuration', (t) => {
  const { ops } = stats.specs.container_default

  t.is(ops.container_nominal_miner_capacity_sum.op, 'sum', 'container_nominal_miner_capacity_sum should be sum op')
  t.is(ops.container_nominal_miner_capacity_sum.src, 'info.nominalMinerCapacity', 'container_nominal_miner_capacity_sum should have correct src')
})

test('stats inherits from base libStats', (t) => {
  // Check that it has the base libStats structure
  t.ok(stats.specs.default, 'should have default specs from base libStats')
  t.ok(stats.specs.default.ops, 'should have ops in default specs')
})

test('container_default extends default ops', (t) => {
  const { ops } = stats.specs.container_default
  const defaultOps = stats.specs.default.ops

  // Check that container_default includes the default ops plus new ones
  const allOps = Object.keys(ops)
  const defaultOpsKeys = Object.keys(defaultOps)

  // All default ops should be present
  for (const key of defaultOpsKeys) {
    t.ok(ops[key], `should include default op: ${key}`)
  }

  // Should have additional container-specific ops
  t.ok(allOps.includes('container_status'), 'should have container-specific ops')
  t.ok(allOps.includes('container_power_w_sum'), 'should have container-specific ops')
})
