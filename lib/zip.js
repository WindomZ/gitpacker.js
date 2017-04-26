/**
 * Created by WindomZ on 17-4-26.
 */
'use strict'

function *zip (file, include, exclude) {
  console.log('zip >>> file: %s', file)
  console.log('zip >>> include: %s', include)
  console.log('zip >>> exclude: %s', exclude)

  return file
}

module.exports = (file, include, exclude) => new Promise(resolve => {
  resolve(zip(file, include, exclude).next())
})
