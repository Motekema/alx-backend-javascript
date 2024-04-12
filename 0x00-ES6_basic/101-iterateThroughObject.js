export default function iterateThroughObject(object) {
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      console.log(`${key}: ${object[key]}`);
    }
  }
}
