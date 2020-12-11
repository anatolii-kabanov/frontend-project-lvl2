import { test, expect } from '@jest/globals';
import { readFile } from '../src/utils.js';
import stylish from '../src/stylish.js';

test('Stylish should return value', () => {
  expect(stylish({})).toBeDefined();
});

test('Stylish Complex JSON should be formatted', () => {
  const resultJson = JSON.parse(readFile('complex-result.json'));
  expect(stylish(resultJson)).toBeDefined();
});
