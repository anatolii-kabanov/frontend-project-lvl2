import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

export const getFixturePath = (filename) => path.join(fileURLToPath(import.meta.url), '../..', '__fixtures__', filename);
export const readFile = (filename) => fs.readFileSync(getFixturePath(filename));

export default {
  getFixturePath,
  readFile,
};
