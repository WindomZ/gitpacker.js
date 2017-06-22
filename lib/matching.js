/**
 * Created by WindomZ on 17-4-26.
 */
'use strict'

/**
 * Match src from matching strings Array.
 *
 * @param {string} src
 * @param {Array} matching
 * @return boolean
 * @api public
 */
function matchingString (src, matching) {
  if (!src || !matching) return false
  let result = false
  matching.some(item => {
    if (src.toLowerCase() === item.toLowerCase()) {
      result = true
      return true
    }
  })
  return result
}

/**
 * Regular src from matching regulars Array.
 *
 * @param {string} src
 * @param {Array} regular
 * @return boolean
 * @api public
 */
function matchingRegular (src, regular) {
  if (!src || !regular) return false
  let result = false
  regular.some(item => {
    if (src.toLowerCase().match(new RegExp(item.toLowerCase(), 'i'))) {
      result = true
      return true
    }
  })
  return result
}

module.exports = {matchingString, matchingRegular}
