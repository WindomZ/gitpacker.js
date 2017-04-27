/**
 * Created by WindomZ on 17-4-27.
 */
const test = require('ava')

const exclude = require('../lib/exclude')

test.serial('exclude pass', t => {
  t.true(exclude('node_modules', true))
  t.false(exclude('node_modules', false))

  t.true(exclude('.gitignore', true))
  t.true(exclude('.gitignore', false))

  t.true(exclude('.xxx', true))
  t.true(exclude('.xxx', false))
})
