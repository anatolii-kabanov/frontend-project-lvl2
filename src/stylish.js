export default function stylish(json) {
  let result = '';
  result = JSON.stringify(json, null, 2).replace(/"/g, '').replace(/'/g, '').replace(/\\/g, '');
  return result;
}
