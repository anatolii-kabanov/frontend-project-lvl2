#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();
program
    .arguments('<filepath1> <filepath2>')
    .version('1.0.0', '-v, --version', 'output the version number')
    .helpOption('-h, --help', 'output usage information')
    .option('-f, --format [type]', 'output format')
    .parse(process.argv);
