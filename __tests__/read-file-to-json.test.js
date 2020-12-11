import { test, expect } from '@jest/globals';
import yaml from 'js-yaml';
import readFileToJson from '../src/read-file-to-json';
import { getFixturePath, readFile } from '../src/utils.js';

test('Should read and match test1.json', () => {
  const resultJson = JSON.parse(readFile('test1.json'));
  expect(readFileToJson(getFixturePath('test1.json'))).toMatchObject(resultJson);
});

test('Should read and equal test1.yml', () => {
  const ymlFileName = 'test1.yml';
  const resultJson = yaml.load(readFile(ymlFileName));
  expect(readFileToJson(getFixturePath(ymlFileName))).toEqual(resultJson);
});
