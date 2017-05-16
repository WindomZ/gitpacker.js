/**
 * Created by WindomZ on 17-4-26.
 */
'use strict'

const shell = require('shelljs')

function tar (dir = '*', file = '', include = [], exclude = []) {
  if (!dir) dir = '*'
  // console.log('tar >>> dir: %j', dir)
  // console.log('tar >>> file: %j', file)
  // console.log('tar >>> include: %j', include)
  // console.log('tar >>> exclude: %j', exclude)

  let cmd = 'tar -cvf ' + file + ' ' + dir
  // include.forEach(item => {
  //   if (item) cmd += ` --include '` + item.replace('/*', '') + `'`
  // })
  exclude.forEach(item => {
    if (item) cmd += ` --exclude '` + item.replace('/*', '') + `'`
  })
  // console.log('tar >>> cmd: %j', cmd)

  if (!shell.which('tar')) {
    throw new ReferenceError('Sorry, this script requires tar')
  }

  if (shell.exec(cmd).code !== 0) {
    throw new ReferenceError('Error: tar commit failed')
  }

  return file
}

module.exports = tar
