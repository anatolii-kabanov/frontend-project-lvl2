import _ from 'lodash';

export const getDifference = (firstObject, secondObject) => {
    const diff = _.reduce(
        firstObject,
        (result, value, key) => {
            if (secondObject.hasOwnProperty(key)) {
                if (_.isEqual(firstObject[key], secondObject[key])) {
                    result[key] = value;
                } else {
                    result[`- ${key}`] = value;
                    result[`+ ${key}`] = secondObject[key];
                }
                delete secondObject[key];
            } else {
                result[`- ${key}`] = value;
            }

            return result;
        },
        {},
    );

    const resultObject = _.reduce(
        secondObject,
        (result, value, key) => {
            result[`+ ${key}`] = value;
            return result;
        },
        diff,
    );

    return resultObject;
};
