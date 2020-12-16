import { test, expect } from '@jest/globals';
import { readFile } from '../../src/utils.js';
import plainFormatter from '../../src/formatters/plain.formatter.js';

test('Plain Formatter should return value', () => {
  expect(plainFormatter({})).toBeDefined();
});

test('Plain Formatter JSON should return formatted value', () => {
  const resultJson = JSON.parse(readFile('complex-result.json'));
  expect(plainFormatter(resultJson)).toBeDefined();
});

test('Plain Formatter JSON should contain expected row', () => {
  const resultJson = JSON.parse(readFile('complex-result.json'));
  expect(plainFormatter(resultJson)).toContain("Property 'common.setting5' was added with value: [complex value]");
});
