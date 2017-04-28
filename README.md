# compress.js
[![Build Status](https://travis-ci.org/WindomZ/gitpacker.js.svg?branch=master)](https://travis-ci.org/WindomZ/gitpacker.js)
[![License](https://img.shields.io/badge/license-Apache-green.svg)](https://www.apache.org/licenses/LICENSE-2.0.html)
[![Dependency](https://david-dm.org/WindomZ/gitpacker.js.svg)](https://david-dm.org/WindomZ/gitpacker.js)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com/)

> A tool to quickly pack and compress the pure git repository.

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

## CLI Usage

```bash
$ gitpacker -h

  Usage: gitpacker [options] [command]


  Commands:

    zip <file> [dir]
    tar <file> [dir]

  Compress files based on git ignore.

  Options:

    -h, --help                 output usage information
    -V, --version              output the version number
    -i, --include <files ...>  include files
    -e, --exclude <files ...>  exclude files
    --debug                    debug mode, such as print error tracks
```

## API Usage

```javascript
const compress = require('gitpacker')
```

### compress (string, string, string, Array, Array)

**Compress files to zip or tar.**
- The first string sets method, e.g. 'zip' or 'tar', 
- The second string sets working directory, 
- The third string sets compress file name, 
- The first Array sets include files, 
- The second Array sets exclude files.

## License

The [Apache License 2.0](https://github.com/WindomZ/gitpacker.js/blob/master/LICENSE)
