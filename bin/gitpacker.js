#!/usr/bin/env node
/**
 * Created by WindomZ on 17-4-21.
 */
'use strict'

const program = require('commander')

const gitpack = require('../lib/gitpack')
const { toArray } = require('../lib/utils')

let noArgs = true

function appender (xs) {
  xs = xs || []
  return function (x) {
    if (x && x.match(/[^:<>|"?\r\n]+/i)) xs.push(x)
    return xs
  }
}

program
  .version(require('../package.json').version)
  .description('Compress files based on git ignore.')
  .option('-i, --include <file>', 'include file', appender(), [])
  .option('-e, --exclude <file>', 'exclude file', appender(), [])
  .option('--debug', 'debug mode, such as print error tracks', null, null)

program
  .command('zip <file> [dir]')
  .action((file, dir, options) => {
    noArgs = false

    // console.log('zip >>> file: %j', file)
    // console.log('zip >>> dir: %j', dir)
    // console.log('zip >>> include: %j', options.parent.include)
    // console.log('zip >>> exclude: %j', options.parent.exclude)

    gitpack({
      method: 'zip',
      dir: dir,
      file: file,
      include: toArray(options.parent.include),
      exclude: toArray(options.parent.exclude)
    }).then(item => process.stdout.write('\nFinish! Package compression saved to ' +
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

    gitpack({
      method: 'tar',
      dir: dir,
      file: file,
      include: toArray(options.parent.include),
      exclude: toArray(options.parent.exclude)
    }).then(item => process.stdout.write('\nFinish! Package compression saved to ' +
      item.value + '\n'))
      .catch(e => process.stderr.write(options.parent.debug ? e : e.message) + '\n')
  })

program.parse(process.argv)

if (noArgs) {
  program.outputHelp()
}
