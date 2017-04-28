/**
 * Created by WindomZ on 17-4-28.
 */
const test = require('ava')

const {matchingString, matchingRegular} = require('../lib/matching')

test('matching pass', t => {
  t.true(matchingString('node_modules', ['node_modules']))
  t.false(matchingString('node_modules', ['node_modules-x']))

  t.true(matchingRegular('node_modules', ['^node']))
  t.false(matchingRegular('node_modules', ['^modules']))

  t.false(matchingString(undefined, undefined))
  t.false(matchingString(null, null))
  t.false(matchingRegular(undefined, undefined))
  t.false(matchingRegular(null, null))
})
