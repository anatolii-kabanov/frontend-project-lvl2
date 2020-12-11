import { test, expect } from '@jest/globals';
import yaml from 'js-yaml';
import getDifference from '../src/json-comparer.js';
import { readFile } from '../src/utils.js';

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

test('Should be same object from file test1.yml', () => {
  const firstYml = yaml.load(readFile('test1.yml'));
  expect(getDifference(firstYml, firstYml)).toEqual(firstYml);
});

test('Should be same object from file complex-test1.json', () => {
  const firstJson = JSON.parse(readFile('complex-test1.json'));
  expect(getDifference(firstJson, firstJson)).toEqual(firstJson);
});

test('2 JSON test files should have result.json result', () => {
  const firstJson = JSON.parse(readFile('test1.json'));
  const secondJson = JSON.parse(readFile('test2.json'));
  const resultJson = JSON.parse(readFile('result.json'));
  expect(getDifference(firstJson, secondJson)).toEqual(resultJson);
});

test('2 YML test files should have result.json result', () => {
  const firstYml = yaml.load(readFile('test1.yml'));
  const secondYml = yaml.load(readFile('test2.yml'));
  const resultJson = JSON.parse(readFile('result.json'));
  expect(getDifference(firstYml, secondYml)).toEqual(resultJson);
});

test('2 Complex JSON test files should have complex-result.json result', () => {
  const firstJson = JSON.parse(readFile('complex-test1.json'));
  const secondJson = JSON.parse(readFile('complex-test2.json'));
  const resultJson = JSON.parse(readFile('complex-result.json'));
  expect(getDifference(firstJson, secondJson)).toEqual(resultJson);
});

test('2 Complex YML test files should have complex-result.json result', () => {
  const firstYml = yaml.load(readFile('complex-test1.yml'));
  const secondYml = yaml.load(readFile('complex-test2.yml'));
  const resultJson = JSON.parse(readFile('complex-result.json'));
  expect(getDifference(firstYml, secondYml)).toEqual(resultJson);
});
