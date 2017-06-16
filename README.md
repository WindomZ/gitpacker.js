# gitpacker.js

[![Greenkeeper badge](https://badges.greenkeeper.io/WindomZ/gitpacker.js.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/WindomZ/gitpacker.js.svg?branch=master)](https://travis-ci.org/WindomZ/gitpacker.js)
[![Coverage Status](https://coveralls.io/repos/github/WindomZ/gitpacker.js/badge.svg?branch=dev)](https://coveralls.io/github/WindomZ/gitpacker.js?branch=dev)
[![Dependency](https://david-dm.org/WindomZ/gitpacker.js.svg)](https://david-dm.org/WindomZ/gitpacker.js)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com/)
[![License](https://img.shields.io/badge/license-Apache-green.svg)](https://www.apache.org/licenses/LICENSE-2.0.html)

> A tool to quickly pack and compress the pure git repository.

[![NPM](https://nodei.co/npm/gitpacker.png)](https://nodei.co/npm/gitpacker/)

[![gitpacker](https://img.shields.io/npm/v/gitpacker.svg)](https://www.npmjs.com/package/gitpacker)
![status](https://img.shields.io/badge/status-stable-green.svg)

## Installation

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

**Compress files to zip or tar.**

- compress method, e.g. 'zip' or 'tar', 
- working directory, 
- compress file name, 
- include files, 
- exclude files.

## Example

### CLI Example

For example, in the current project directory, want to `gitpacker` and exclude all `.sh` and `.md` files: 

```bash
gitpacker zip xxx.zip . -e '*.sh' -e '*.md'
```

or want to `gitpacker` the `./lib` directory: 

```bash
gitpacker zip xxx.zip lib
```

## License

The [Apache License 2.0](https://github.com/WindomZ/gitpacker.js/blob/master/LICENSE)
