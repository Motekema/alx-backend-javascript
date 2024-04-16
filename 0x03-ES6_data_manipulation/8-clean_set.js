// 8-clean_set.js

function cleanSet(set, startString) {
  return Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join("-");
}

export default cleanSet;
