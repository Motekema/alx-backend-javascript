export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  for (const employee of reportWithIterator) {
    result += employee + ' | ';
  }
  // Remove the last pipe character and space
  result = result.slice(0, -3);
  return result;
}
