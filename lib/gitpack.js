/**
 * Created by WindomZ on 17-4-28.
 */
'use strict'

const path = require('path')
const fs = require('fs')

const compress = require('./compress')

/**
 * Compress files to zip or tar, based on the git ignore configuration.
 *
 * @param {object} param
 * @return string
 * @api public
 */
function * gitpack (param) {
  if (!param.method) throw new TypeError('"method" argument must not be empty')
  if (!param.dir) param.dir = '.'

  if (!param.exclude || typeof param.exclude !== 'object') {
    param.exclude = []
  }

  let fileIgnore = path.join(param.dir, '.gitignore')
  try {
    if (fs.statSync(fileIgnore).isFile()) {
      let buf = '' + fs.readFileSync(fileIgnore)
      let lines = buf.split(/\r?\n/ig)
      lines.forEach(line => {
        if (!line) return
        if (line.trim().match(/^#/ig)) return
        param.exclude.push(path.join(param.dir, line))
      })
    }
  } catch (e) {
  }

  return compress(param.method, param.dir, param.file, param.include, param.exclude)
}

module.exports = param => new Promise(resolve => {
  resolve(gitpack(param).next())
})
