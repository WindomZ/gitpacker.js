#!/usr/bin/env node
/**
 * Created by WindomZ on 17-4-21.
 */
'use strict'

const process = require('process')

const program = require('commander')

const pkg = require('../package.json')

const compress = require('../lib/compress')
const {toArray} = require('../lib/utils')

let noArgs = true

program
  .version(pkg.version)
  .description('Compress files based on git ignore.')
  .option('-i, --include <files ...>', 'include files', /[\w,]+/i, null)
  .option('-e, --exclude <files ...>', 'exclude files', /[\w,]+/i, null)
  .option('--debug', 'debug mode, such as print error tracks', null, null)

program
  .command('zip <file> [dir]')
  .action((file, dir, options) => {
    noArgs = false

    // console.log('zip >>> file: %j', file)
    // console.log('zip >>> dir: %j', dir)
    // console.log('zip >>> include: %j', options.parent.include)
    // console.log('zip >>> exclude: %j', options.parent.exclude)

    compress('zip', dir, file,
      toArray(options.parent.include), toArray(options.parent.exclude))
      .then(item => process.stdout.write('\nFinish! Package compression saved to ' +
        item.value + '\n'))
      .catch(e => process.stderr.write(options.parent.debug ? e : e.message) + '\n')
  })

program
  .command('tar <file> [dir]')
  .action((file, dir, options) => {
    noArgs = false

    // console.log('tar >>> file: %j', file)
    // console.log('tar >>> dir: %j', dir)
    // console.log('tar >>> include: %j', options.parent.include)
    // console.log('tar >>> exclude: %j', options.parent.exclude)

    compress('tar', dir, file,
      toArray(options.parent.include), toArray(options.parent.exclude))
      .then(item => process.stdout.write('\nFinish! Package compression saved to ' +
        item.value + '\n'))
      .catch(e => process.stderr.write(options.parent.debug ? e : e.message) + '\n')
  })

program.parse(process.argv)

if (noArgs) {
  program.outputHelp()
}
