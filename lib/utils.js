/**
 * Created by WindomZ on 17-4-26.
 */
'use strict'

function toArray (item) {
  if (item) {
    if (typeof item !== Array) {
      return ('' + item).split(',', -1)
    }
    return item
  }
  return []
}

module.exports = {toArray}
