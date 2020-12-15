import stylish from '../stylish.js';

export default function jsonFormatter(json) {
  const jsonString = JSON.stringify(json);
  return stylish(jsonString);
}
