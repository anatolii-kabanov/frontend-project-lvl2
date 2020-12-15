import { test, expect } from '@jest/globals';
import { readFile } from '../../src/utils.js';
import jsonFormatter from '../../src/formatters/json.formatter.js';

test('Json Formatter should return value', () => {
  expect(jsonFormatter({})).toBeDefined();
});

test('Json Formatter JSON should return formatted value', () => {
  const resultJson = JSON.parse(readFile('complex-result.json'));
  expect(jsonFormatter(resultJson)).toBeDefined();
});
