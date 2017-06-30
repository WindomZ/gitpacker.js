# gitpacker.js

[![Greenkeeper badge](https://badges.greenkeeper.io/WindomZ/gitpacker.js.svg?style=flat-square)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/WindomZ/gitpacker.js.svg?branch=master&style=flat-square)](https://travis-ci.org/WindomZ/gitpacker.js)
[![Coverage Status](https://coveralls.io/repos/github/WindomZ/gitpacker.js/badge.svg?branch=master&style=flat-square)](https://coveralls.io/github/WindomZ/gitpacker.js?branch=master)
[![Dependency](https://david-dm.org/WindomZ/gitpacker.js.svg?style=flat-square)](https://david-dm.org/WindomZ/gitpacker.js)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](https://standardjs.com/)
[![Minimum Node.js Version](https://img.shields.io/badge/node-%3E%3D6-blue.svg?style=flat-square)](https://nodejs.org)
<!--[![License](https://img.shields.io/badge/license-Apache-green.svg?style=flat-square)](https://www.apache.org/licenses/LICENSE-2.0.html)-->

> A tool to quickly pack and compress the pure git repository.

[![NPM](https://nodei.co/npm/gitpacker.png)](https://nodei.co/npm/gitpacker/)

[![gitpacker](https://img.shields.io/npm/v/gitpacker.svg?style=flat-square)](https://www.npmjs.com/package/gitpacker)
[![status](https://img.shields.io/badge/status-stable-green.svg?style=flat-square)](https://www.npmjs.com/package/gitpacker)

## Features

- [x] _Automatically_ load `.gitignore` files and excludes files inside it.
- [x] _Customize_ include files and exclude files as you need.
- [x] _Include_ files with higher priority than _exclude_ files, automatically retrieved and adapted.

## Install

### CLI executable

```bash
npm install -g gitpacker
```

### API install

```bash
npm install --save gitpacker
```

## Usage

### CLI Usage

```bash
$ gitpacker -h

  Usage: gitpacker [options] [command]


  Commands:

    zip <file> [dir]
    tar <file> [dir]

  Compress files based on git ignore.

  Options:

    -h, --help            output usage information
    -V, --version         output the version number
    -i, --include <file>  include file
    -e, --exclude <file>  exclude file
    --debug               debug mode, such as print error tracks
```

### API Usage

```javascript
const compress = require('gitpacker')
```

#### compress (method:string, directory:string, compress:string, includes:Array, excludes:Array)

> Compress files with zip or tar.

- compress method, 'zip' or 'tar'.
- working directory, default is `.`.
- compress file name, you want to get the compressed file name.
- include files, you want to pack the files.
- exclude files, you don't want to pack the files.

#### compress.promise (method:string, directory:string, compress:string, includes:Array, excludes:Array)

> Ibid, a promise function.

## Example

### CLI Example

For example, in the current project directory, want to `gitpacker` and exclude all `.sh` and `.md` files: 

```bash
gitpacker zip name.zip . -e '*.sh' -e '*.md'
```

Or only want to `gitpacker` the all `.js`files in `./lib` directory: 

```bash
gitpacker zip name.zip lib -i '*.js'
```

## Support

Welcome your **Star**, make pull requests, report bugs, suggest ideas and discuss **gitpacker.js**.

I would love to hear what you think about **gitpacker.js** on [issues page](https://github.com/WindomZ/gitpacker.js/issues).

Your support is my unremitting power.
