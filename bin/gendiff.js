#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../src/generate-difference.js';

const program = new Command();
program
  .version('1.0.0', '-v, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const resultString = genDiff(filepath1, filepath2);
    console.log(resultString);
  })
  .parse(process.argv);
