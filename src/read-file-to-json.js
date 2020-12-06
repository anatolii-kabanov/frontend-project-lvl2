import fs from 'fs';

export const readFileToJson = (filePath) => {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
};
