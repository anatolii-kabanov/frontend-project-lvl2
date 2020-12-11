export default function stylish(json) {
  let result = '';
  result = JSON.stringify(json, null, 2);
  return result;
}
