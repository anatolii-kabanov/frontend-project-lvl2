import _ from 'lodash';

export default function getDifference(firstObject, secondObject) {
  const secondObj = _.cloneDeep(secondObject);
  const diff = _.reduce(
    firstObject,
    (result, value, key) => {
      const resultObj = _.cloneDeep(result);
      if (Object.prototype.hasOwnProperty.call(secondObject, key)) {
        if (_.isEqual(firstObject[key], secondObject[key])) {
          resultObj[key] = value;
        } else if (typeof (value) === 'object' && typeof (secondObject[key]) === 'object') {
          resultObj[key] = getDifference(value, secondObject[key]);
        } else {
          resultObj[`- ${key}`] = value;
          resultObj[`+ ${key}`] = secondObject[key];
        }
        delete secondObj[key];
      } else {
        resultObj[`- ${key}`] = value;
      }

      return resultObj;
    },
    {},
  );

  const resultObject = _.reduce(
    secondObj,
    (result, value, key) => {
      const resultObj = _.cloneDeep(result);
      resultObj[`+ ${key}`] = value;
      return resultObj;
    },
    diff,
  );

  return resultObject;
}
