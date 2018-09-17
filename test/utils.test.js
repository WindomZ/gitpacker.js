/**
 * Created by WindomZ on 17-4-28.
 */
const test = require('ava')

const { toArray } = require('../lib/utils')

test('toArray pass', t => {
  let arr1 = toArray('node_modules')
  t.is(typeof arr1, 'object')
  t.is(arr1.length, 1)

  let arr2 = toArray(['node_modules'])
  t.is(typeof arr2, 'object')
  t.is(arr2.length, 1)

  let arr3 = toArray()
  t.is(typeof arr3, 'object')
  t.is(arr3.length, 0)
})
