/**
 * Created by WindomZ on 17-4-25.
 */
'use strict'

const path = require('path')
const fs = require('fs')

const assetExclude = require('./exclude')
const {include, addIncludes, exclude, addExcludes} = require('./filter')
const zip = require('./zip')
const tar = require('./tar')

/**
 * Compress files to zip or tar.
 *
 * @param {string} method
 * @param {string} dir
 * @param {string} [file]
 * @param {Array} [includes]
 * @param {Array} [excludes]
 * @return string
 * @api public
 */
function compress (method = '', dir = process.cwd(), file = process.cwd(), includes = [], excludes = []) {
  if (!includes) {
    includes = []
  } else if (typeof includes !== 'object') {
    throw new TypeError('"includes" argument must be type of array object, not ' + typeof includes)
  }
  addIncludes(includes)

  if (!excludes) {
    excludes = []
  } else if (typeof excludes !== 'object') {
    throw new TypeError('"excludes" argument must be type of array object, not ' + typeof excludes)
  }
  addExcludes(excludes)

  let func = null
  switch (method.toLowerCase()) {
    case 'zip':
      func = zip
      break
    case 'tar':
      func = tar
      break
    default:
      throw new TypeError('"method" argument must be "zip" or "tar"')
  }

  if (!file) file = process.cwd()
  if (path.extname(file).toLowerCase() !== '.' + method.toLowerCase()) file = file + '.' + method.toLowerCase()

  includes = []
  excludes = []
  if (dir) {
    dir = path.isAbsolute(dir) ? dir : path.join(process.cwd(), dir)
  } else {
    dir = process.cwd()
  }
  includes = includes.concat(includeFileWalker(dir))
  excludes = excludes.concat(excludeFileWalker(dir))

  return func(path.relative(process.cwd(), dir), file, includes, excludes)
}

function includeFileWalker (dir) {
  let dirList = fs.readdirSync(dir)
  let fileList = []

  dirList.forEach(item => {
    let file = path.join(dir, item)
    let stat = fs.statSync(file)
    if (stat.isFile()) {
      if (include(item) && !assetExclude(item, false)) fileList.push(path.relative(process.cwd(), file))
    } else if (stat.isDirectory()) {
      if (include(item) && !assetExclude(item, true)) fileList = fileList.concat(includeFileWalker(file))
    }
  })

  return fileList
}

function excludeFileWalker (dir) {
  let dirList = fs.readdirSync(dir)
  let fileList = []

  dirList.forEach(item => {
    let file = path.join(dir, item)
    let stat = fs.statSync(file)
    if (stat.isFile()) {
      if (exclude(item) || assetExclude(item, false)) fileList.push(path.relative(process.cwd(), file))
    } else if (stat.isDirectory()) {
      if (exclude(item) || assetExclude(item, true)) fileList.push(path.join(path.relative(process.cwd(), file), '*'))
    }
  })

  return fileList
}

function * _compress (method, dir, file, includes, excludes) {
  return compress(method, dir, file, includes, excludes)
}

module.exports = compress

module.exports.promise = (method, dir, file, includes, excludes) => new Promise(resolve => {
  resolve(_compress(method, dir, file, includes, excludes).next())
})
