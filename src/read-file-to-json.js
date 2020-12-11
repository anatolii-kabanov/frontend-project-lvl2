import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export default function readFileToJson(filePath) {
  const data = fs.readFileSync(filePath, 'utf8');
  const format = path.extname(filePath);
  let parse;
  switch (format) {
    case '.json':
      parse = JSON.parse;
      break;
    case '.yml':
      parse = yaml.load;
      break;
    default:
      break;
  }
  return parse(data);
}
