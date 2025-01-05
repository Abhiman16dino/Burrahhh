console.log("Top k frequent elements");

const nums = [1, 2, 2, 3, 3, 3];  // Array of numbers
const k = 2;  // We want the top 2 frequent elements

// Function to find top k frequent elements in the array
function topKFrequent(nums, k) {
  const hash = {};  // Object to store the frequency of each element
  const result = [];  // Array to store the result
  const bucket = [];  // Bucket to group elements by their frequencies

  // Initialize bucket with empty arrays. Bucket[i] will store elements that appear i times.
  for (let i = 0; i < nums.length + 1; i++) {
    bucket.push([]);
  }

  // Step 1: Count the frequency of each element in the nums array
  for (let item of nums) {
    hash[item] ? (hash[item] = hash[item] + 1) : (hash[item] = 1);
  }

  // Step 2: Place elements into buckets based on their frequency
  for (const key in hash) {
    bucket[hash[key]].push(key);  // Push element into the bucket corresponding to its frequency
  }

  // Step 3: Loop through buckets in reverse order to get the most frequent elements first
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i].length > 0) {  // If the bucket contains elements
      for (let item of bucket[i]) {
        if (result.length == k) {  // Stop if we have found k elements
          break;
        }
        result.push(item);  // Add element to the result array
      }
    }
  }
  return result;  // Return the top k frequent elements
}

console.log('result', topKFrequent(nums, k));  // Output the result
