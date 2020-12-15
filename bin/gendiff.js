#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../src/generate-difference.js';
import formatType from '../src/formatters/format.types.js';

const program = new Command();
program
  .version('1.0.0', '-v, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format [type]', 'output format', formatType.plain)
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2, options) => {
    const resultString = genDiff(filepath1, filepath2, options.format);
    console.log(resultString);
  })
  .parse(process.argv);
