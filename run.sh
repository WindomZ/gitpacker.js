#!/usr/bin/env bash
rm -f test.zip
./bin/gitpacker.js zip test.zip -i asset -e lib,bin

rm -f test.zip.tar
./bin/gitpacker.js tar test.zip -i asset -e lib,bin
