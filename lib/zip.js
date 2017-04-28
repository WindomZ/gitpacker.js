/**
 * Created by WindomZ on 17-4-26.
 */
'use strict'

const shell = require('shelljs')

function zip (dir = '.', file = '', include = [], exclude = []) {
  if (!dir) dir = '.'
  // console.log('zip >>> dir: %j', dir)
  // console.log('zip >>> file: %j', file)
  // console.log('zip >>> include: %j', include)
  // console.log('zip >>> exclude: %j', exclude)

  let cmd = 'zip -r ' + file + ' ' + dir
  include.forEach(item => {
    if (item) cmd += ` -i '` + item + `'`
  })
  exclude.forEach(item => {
    if (item) cmd += ` -x '` + item + `'`
  })
  // console.log('zip >>> cmd: %j', cmd)

  if (!shell.which('zip')) {
    throw new TypeError('Sorry, this script requires zip')
  }

  if (shell.exec(cmd).code !== 0) {
    throw new TypeError('Error: zip commit failed')
  }

  return file
}

module.exports = zip
