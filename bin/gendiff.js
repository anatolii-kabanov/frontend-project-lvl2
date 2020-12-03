#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();
program
    .version('1.0.0', '-v, --version', 'output the version number')
    .helpOption('-h, --help', 'output usage information')
    .parse(process.argv);
