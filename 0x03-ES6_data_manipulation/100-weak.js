// 100-weak.js

// Define a WeakMap to track the number of times queryAPI is called for each endpoint
const weakMap = new WeakMap();

// Export the weakMap
export { weakMap };

// Export the queryAPI function
export function queryAPI(endpoint) {
  // Check if the weakMap has an entry for the endpoint
  if (!weakMap.has(endpoint)) {
    // If not, initialize the count to 1
    weakMap.set(endpoint, 1);
  } else {
    // If yes, increment the count
    const count = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, count);

    // Check if the count is >= 5
    if (count >= 5) {
      // If yes, throw an error
      throw new Error('Endpoint load is high');
    }
  }

  // Log the current count for the endpoint
  console.log(weakMap.get(endpoint));
}
