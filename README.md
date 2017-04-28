# gitpacker.js

[![Greenkeeper badge](https://badges.greenkeeper.io/WindomZ/gitpacker.js.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/WindomZ/gitpacker.js.svg?branch=master)](https://travis-ci.org/WindomZ/gitpacker.js)
[![License](https://img.shields.io/badge/license-Apache-green.svg)](https://www.apache.org/licenses/LICENSE-2.0.html)
[![Dependency](https://david-dm.org/WindomZ/gitpacker.js.svg)](https://david-dm.org/WindomZ/gitpacker.js)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com/)

> A tool to quickly pack and compress git repository.

[![gitpacker.js](https://img.shields.io/npm/v/gitpacker.js.svg)](https://www.npmjs.com/package/gitpacker.js)
![status](https://img.shields.io/badge/status-stable-green.svg)

## Installation

```bash
npm install -g gitpacker.js
```

## Usage

```bash
$ gitpacker.js -h

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

## License

The [Apache License 2.0](https://github.com/WindomZ/gitpacker.js/blob/master/LICENSE)
