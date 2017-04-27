/**
 * Created by WindomZ on 17-4-26.
 */

function matchingString (src, matching) {
  let result = false
  matching.some(item => {
    if (src.toLowerCase() === item.toLowerCase()) {
      result = true
      return true
    }
  })
  return result
}

function matchingRegular (src, regular) {
  let result = false
  regular.some(item => {
    if (src.toLowerCase().match(new RegExp(item, 'i'))) {
      result = true
      return true
    }
  })
  return result
}

module.exports = {matchingString, matchingRegular}
