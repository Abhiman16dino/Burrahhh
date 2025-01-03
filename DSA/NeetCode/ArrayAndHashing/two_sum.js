// TODO: O(n2), O(1)
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return i <= j ? [i, j] : [j, i];
      }
    }
  }
}

target = 7;
nums = [3, 4, 5, 6, 1];

console.log(twoSum(nums, target));


// TODO: Optimal, One Pass. Hash Map
// Example Walkthrough
// Input:
// nums = [2, 7, 11, 15], target = 9

// Step-by-Step Execution:

// Initial Setup:
// prevMap = {} (empty map)

// Iteration 1 (i = 0, nums[i] = 2):

// Calculate diff = target - nums[i] = 9 - 2 = 7.
// Check prevMap for 7: not found.
// Add 2 to prevMap:
// prevMap = {2: 0}.
// Iteration 2 (i = 1, nums[i] = 7):

// Calculate diff = target - nums[i] = 9 - 7 = 2.
// Check prevMap for 2: found (at index 0).
// Return [prevMap.get(2), i] = [0, 1].
// Output:
// [0, 1] (indices of numbers 2 and 7 that add up to 9).
function twoSum(nums, target) {
    const prevMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (prevMap.has(diff)) {
            return [prevMap.get(diff), i];
        }

        prevMap.set(nums[i], i);
    }

    return [];
}