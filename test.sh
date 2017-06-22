#!/usr/bin/env bash
rm -f test.zip
./bin/gitpacker.js zip test.zip -i asset -e lib -e bin -e '*.sh'

rm -f test.tar
./bin/gitpacker.js tar test.tar -i asset -e lib,bin
