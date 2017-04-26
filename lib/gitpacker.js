/**
 * Created by WindomZ on 17-4-25.
 */
'use strict'

const process = require('process')
const path = require('path')
const fs = require('fs')

const zip = require('./zip')
const tar = require('./tar')
const {include, addIncludes, addExcludes} = require('./filter')

function *compress (method, file, dirs, includes, excludes) {
  if (!dirs) {
    dirs = ['./']
  } else if (typeof dirs === Array) {
    throw new TypeError('"dirs" argument must be type of array')
  }

  if (!includes) {
    includes = []
  } else if (typeof includes === Array) {
    throw new TypeError('"includes" argument must be type of array')
  }
  addIncludes(includes)

  if (!excludes) {
    excludes = []
  } else if (typeof excludes === Array) {
    throw new TypeError('"excludes" argument must be type of array')
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

  if (!file) {
    file = process.cwd()
  }
  let save = file + '.' + method.toLowerCase()

  dirs.forEach(dir => {
    if (!dir) return
    includes = includes.concat(fileWalker(path.isAbsolute(dir) ? dir : path.join(__dirname, dir)))
  })

  func(save, includes, excludes)
}

function fileWalker (dir) {
  let dirList = fs.readdirSync(dir)
  let fileList = []

  dirList.forEach(item => {
    let file = path.join(dir, item)
    let stat = fs.statSync(file)
    if (stat.isFile()) {
      if (include(path.basename(file), false)) fileList.push(file)
    } else if (stat.isDirectory()) {
      if (include(path.basename(file), true)) fileList = fileList.concat(fileWalker(file))
    }
  })

  return fileList
}

module.exports = (method, file, dirs, includes, excludes) => new Promise(resolve => {
  resolve(compress(method, file, dirs, includes, excludes).next())
})
