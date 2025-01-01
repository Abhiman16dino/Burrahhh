// Contains Duplicate
// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Example 1:

// Input: nums = [1, 2, 3, 3]

// Output: true

// Example 2:

// Input: nums = [1, 2, 3, 4]

// Output: false

// Solution

//TODO: This is how i did it; [n2, n]
function hasDuplicate(nums) {
    const uniques = [];
    for(let item of nums){
        if(uniques.includes(item)){
            return true;
        } else {
        uniques.push(item);
        }
    }
    return false;
}

//TODO: Optimized way 1: HashSet [n,n]
function hasDuplicate_v1(nums) {
    const seen = new Set();
    for (const num of nums) {
        if (seen.has(num)) {        // Instead of array we used same logic with Set,
            return true;            // As it have lower complexity.
        }
        seen.add(num);
    }
    return false;
}

//TODO: Optimized way 2: HashSet Length
function hasDuplicate_v2(nums) {
    // If elements are unique then set and array will be of same size/
    return new Set(nums).size < nums.length;
}

console.log(hasDuplicate([1,2,3,4]));
console.log(hasDuplicate_v1([1,2,3,4]));
console.log(hasDuplicate_v2([1,2,3,4]));