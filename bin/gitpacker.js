#!/usr/bin/env node
/**
 * Created by WindomZ on 17-4-21.
 */
'use strict'

const process = require('process')

const program = require('commander')

const pkg = require('../package.json')

const compress = require('../lib/gitpacker')
const {toArray} = require('../lib/utils')

let noArgs = true

program
  .version(pkg.version)
  .description('Compress files based on git ignore.')
  .option('-i, --include <files ...>', 'include files', null, null)
  .option('-e, --exclude <files ...>', 'exclude files', null, null)

program
  .command('zip <file> [dirs...]')
  .action((file, dirs, options) => {
    noArgs = false

    console.log('zip >>> file: %s', file)
    console.log('zip >>> dirs: %s', dirs)
    console.log('zip >>> include: %s', options.parent.include)
    console.log('zip >>> exclude: %s', options.parent.exclude)

    compress('zip', file, toArray(dirs),
      toArray(options.parent.include), toArray(options.parent.exclude))
      .then(item => console.log('then: ', item))
      .catch(e => console.error('catch: ', e))
  })

program
  .command('tar <file> [dirs...]')
  .action((file, dirs, options) => {
    noArgs = false

    console.log('tar >>> file: %s', file)
    console.log('tar >>> dirs: %s', dirs)
    console.log('tar >>> include: %s', options.parent.include)
    console.log('tar >>> exclude: %s', options.parent.exclude)

    compress('tar', file, toArray(dirs),
      toArray(options.parent.include), toArray(options.parent.exclude))
      .then(item => console.log('then: ', item))
      .catch(e => console.error('catch: ', e))
  })

program.parse(process.argv)

if (noArgs) {
  program.outputHelp()
}
