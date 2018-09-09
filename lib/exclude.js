/**
 * Created by WindomZ on 17-4-26.
 */
'use strict'

const list = require('../asset/exclude.json')
const { matchingString, matchingRegular } = require('./matching')

/**
 * Exclude default files from asset/exclude.json.
 *
 * @param {string} file
 * @param {boolean} isDirectory
 * @return boolean
 * @api public
 */
function exclude (file, isDirectory) {
  if (!file) return false
  if (isDirectory) {
    if (excludeMatching(file, list.dirs.matching)) {
      return true
    } else if (excludeRegular(file, list.dirs.regular)) {
      return true
    }
  } else {
    if (excludeMatching(file, list.files.matching)) {
      return true
    } else if (excludeRegular(file, list.files.regular)) {
      return true
    }
  }
  return false
}

function excludeMatching (file, matching) {
  return matchingString(file, matching)
}

function excludeRegular (file, regular) {
  return matchingRegular(file, regular)
}

module.exports = exclude
