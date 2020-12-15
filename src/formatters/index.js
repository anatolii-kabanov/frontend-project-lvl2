import plainFormatter from './plain.formatter.js';
import jsonFormatter from './json.formatter.js';
import formatType from './format.types.js';

export default function format(json, type) {
  switch (type) {
    case formatType.json:
      return jsonFormatter(json);
    case formatType.plain:
      return plainFormatter(json);
    default:
      return json;
  }
}
