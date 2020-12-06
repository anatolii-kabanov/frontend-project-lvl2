import { readFileToJson } from '../src/read-file-to-json.js';
import { getDifference } from '../src/json-comparer.js';

export default function genDiff(filePath1, filePath2) {
    const firstJson = readFileToJson(filePath1);
    const secondJson = readFileToJson(filePath2);
    const resultJson = getDifference(firstJson, secondJson);
    return JSON.stringify(resultJson);
}
