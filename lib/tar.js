/**
 * Created by WindomZ on 17-4-26.
 */
'use strict'

function tar (dir, file, include, exclude) {
  if (!dir) dir = './'
  console.log('tar >>> dir: %s', dir)
  console.log('tar >>> file: %s', file)
  console.log('tar >>> include: %s', include)
  console.log('tar >>> exclude: %s', exclude)

  return file
}

module.exports = tar
