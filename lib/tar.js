/**
 * Created by WindomZ on 17-4-26.
 */
'use strict'

function tar (dir, file, include, exclude) {
  if (!dir) dir = '*'
  console.log('tar >>> dir: %j', dir)
  console.log('tar >>> file: %j', file)
  console.log('tar >>> include: %j', include)
  console.log('tar >>> exclude: %j', exclude)

  let cmd = 'tar -cvf ' + file + ' ' + dir
  // include.forEach(item => {
  //   if (item) cmd += ' --include ' + item
  // })
  exclude.forEach(item => {
    if (item) cmd += ' --exclude ' + item
  })
  console.log('zip >>> cmd: %j', cmd)

  return file
}

module.exports = tar
