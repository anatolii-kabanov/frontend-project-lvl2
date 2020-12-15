import _ from 'lodash';

const getFormattedValue = (value) => {
  let result = value;
  if (value !== null && typeof (value) === 'object') {
    result = '[complex value]';
  } else if (typeof (value) === 'string') {
    result = `'${value}'`;
  }
  return result;
};

const messages = {
  wasAdded: (value) => `was added with value: ${getFormattedValue(value)}`,
  wasRemoved: 'was removed',
  wasUpdated: (from, to) => `was updated. From ${getFormattedValue(from)} to ${getFormattedValue(to)}`,
};

export default function plainFormatter(json, propertyPath = '') {
  const arrayOfProps = [];
  const keys = Object.keys(json);
  keys.forEach((key, index) => {
    if (key.startsWith('- ')) {
      const propertyName = key.substr(2);
      const addedKey = `+ ${propertyName}`;
      if (_.has(json, addedKey)) {
        keys.splice(index, 1);
        arrayOfProps.push(`Property '${propertyPath}${propertyName}' ${messages.wasUpdated(json[key], json[addedKey])}`);
      } else {
        arrayOfProps.push(`Property '${propertyPath}${propertyName}' ${messages.wasRemoved}`);
      }
    } else if (key.startsWith('+ ')) {
      const propertyName = key.substr(2);
      arrayOfProps.push(`Property '${propertyPath}${propertyName}' ${messages.wasAdded(json[key])}`);
    } else if (typeof (json[key]) === 'object') {
      arrayOfProps.push(plainFormatter(json[key], `${propertyPath}${key}.`));
    }
  });
  return arrayOfProps.join('\n\r');
}
