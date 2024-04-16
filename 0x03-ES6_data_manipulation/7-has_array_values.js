// 7-has_array_values.js

function hasValuesFromArray(set, array) {
  return array.every((element) => set.has(element));
}

export default hasValuesFromArray;
