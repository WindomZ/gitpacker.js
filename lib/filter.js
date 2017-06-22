/**
 * Created by WindomZ on 17-4-26.
 */
'use strict'

const {matchingString, matchingRegular} = require('./matching')

let includes = {
  'matching': [],
  'regular': []
}

let excludes = {
  'matching': [],
  'regular': []
}

function include (file) {
  if (includes.matching && matchingString(file, includes.matching)) {
    return true
  } else if (includes.regular && matchingRegular(file, includes.regular)) {
    return true
  }
  return false
}

function addIncludes (items) {
  if (!items || typeof items !== 'object') return
  items.forEach(item => {
    if (!item) {
      return
    }
    if (item.includes('*')) {
      includes.regular.push('^' + item.replace('*', '.+') + '$')
    } else if (item.endsWith('/')) {
      includes.regular.push(item.slice(0, item.length - 1) + '(/.+)?$')
    } else {
      includes.matching.push(item)
    }
  })
}

function exclude (file) {
  if (excludes.matching && matchingString(file, excludes.matching)) {
    return true
  } else if (excludes.regular && matchingRegular(file, excludes.regular)) {
    return true
  }
  return false
}

function addExcludes (items) {
  if (!items || typeof items !== 'object') return
  items.forEach(item => {
    if (!item) {
      return
    }
    if (item.includes('*')) {
      excludes.regular.push('^' + item.replace('*', '.+') + '$')
    } else if (item.endsWith('/')) {
      excludes.regular.push(item.slice(0, item.length - 1) + '(/.+)?$')
    } else {
      excludes.matching.push(item)
    }
  })
}

module.exports = {include, addIncludes, exclude, addExcludes}
