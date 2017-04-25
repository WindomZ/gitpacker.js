#!/usr/bin/env node
/**
 * Created by WindomZ on 17-4-21.
 */
'use strict'

const process = require('process')

const program = require('commander')

const pkg = require('../package.json')

let noArgs = true

program
  .version(pkg.version)
  .description('Compress files based on git ignore.')
  .option('-i, --include <file...>', 'include files', null, null)
  .option('-e, --exclude <file...>', 'exclude files', null, null)

program
  .command('zip <file>')
  .action((file, options) => {
    noArgs = false
    console.log('zip >>> file: %s', file)
    console.log('zip >>> include: %s', options.parent.include)
    console.log('zip >>> exclude: %s', options.parent.exclude)
  })

program
  .command('tar <file>')
  .action((file, options) => {
    noArgs = false
    console.log('tar >>> file: %s', file)
    console.log('tar >>> include: %s', options.parent.include)
    console.log('tar >>> exclude: %s', options.parent.exclude)
  })

program.parse(process.argv)

if (noArgs) {
  program.outputHelp()
}
