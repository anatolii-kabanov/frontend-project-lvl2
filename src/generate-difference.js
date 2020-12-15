import readFileToJson from './read-file-to-json.js';
import getDifference from './json-comparer.js';
import formatResponse from './formatters/index.js';

export default function genDiff(filePath1, filePath2, format) {
  const firstJson = readFileToJson(filePath1);
  const secondJson = readFileToJson(filePath2);
  const resultJson = getDifference(firstJson, secondJson);
  return formatResponse(resultJson, format);
}
