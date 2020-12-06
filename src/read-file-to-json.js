import fs from 'fs';

export default function readFileToJson(filePath) {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}
