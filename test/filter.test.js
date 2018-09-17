/**
 * Created by WindomZ on 17-4-28.
 */
const test = require('ava')

const { include, addIncludes, exclude, addExcludes } = require('../lib/filter')

test('filter pass', t => {
  addIncludes()
  addExcludes()

  t.false(include('aaa'))
  t.false(exclude('aaa'))

  addIncludes([''])
  addExcludes([''])

  t.false(include('aaa'))
  t.false(exclude('aaa'))

  addIncludes(['aaa'])
  addIncludes(['bbb'])

  addExcludes(['ccc'])
  addExcludes(['ddd'])

  t.true(include('aaa'))
  t.false(exclude('aaa'))

  t.true(include('bbb'))
  t.false(exclude('bbb'))

  t.false(include('ccc'))
  t.true(exclude('ccc'))

  t.false(include('ddd'))
  t.true(exclude('ddd'))

  addIncludes(['*-x'])
  addExcludes(['*-y'])

  t.true(include('aaa-x'))
  t.false(exclude('aaa-x'))

  t.false(include('aaa-y'))
  t.true(exclude('aaa-y'))
})
