export default function stylish(json) {
  return JSON.stringify(json, null, 2).replace(/"/g, '').replace(/'/g, '').replace(/\\/g, '');
}
