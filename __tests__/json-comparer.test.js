import { test, expect } from '@jest/globals';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import getDifference from '../src/json-comparer.js';

const getFixturePath = (filename) => path.join(fileURLToPath(import.meta.url), '../..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename));

test('Should be object', () => {
  expect(getDifference(null, null)).toEqual({});
});

test('Should be object', () => {
  expect(getDifference({}, {})).toEqual({});
});

test('Should be same object from file test1.json', () => {
  const firstJson = JSON.parse(readFile('test1.json'));
  expect(getDifference(firstJson, firstJson)).toEqual(firstJson);
});

test('2 test files should have result.json result', () => {
  const firstJson = JSON.parse(readFile('test1.json'));
  const secondJson = JSON.parse(readFile('test2.json'));
  const resultJson = JSON.parse(readFile('result.json'));
  expect(getDifference(firstJson, secondJson)).toEqual(resultJson);
});
