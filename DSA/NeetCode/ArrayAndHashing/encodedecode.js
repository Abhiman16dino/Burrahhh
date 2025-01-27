class Solution {
    /**
     * Encodes a list of strings into a single string.
     * Each string is represented as "<length>#<string>" to ensure proper decoding.
     *
     * @param {string[]} strs - An array of strings to encode.
     * @returns {string} - The encoded string.
     */
    encode(strs) {
        // Initialize an empty result string
        let res = "";

        // Iterate through each string in the input array
        for (let s of strs) {
            // Append the length of the string, followed by '#', and the string itself
            res += s.length + "#" + s;
        }

        // Return the final encoded string
        return res;
    }

    /**
     * Decodes a single string into a list of strings.
     * The encoded format is "<length>#<string>", so this method extracts each string based on its length.
     *
     * @param {string} str - The encoded string.
     * @returns {string[]} - An array of decoded strings.
     */
    decode(str) {
        // Initialize an empty array to store the decoded strings
        let res = [];

        // Initialize a pointer to traverse the encoded string
        let i = 0;

        // Continue processing until the pointer reaches the end of the string
        while (i < str.length) {
            let j = i;

            // Find the position of the next '#' to determine the length of the string
            while (str[j] !== '#') {
                j++;
            }

            // Extract the length of the string (substring from i to j) and convert it to an integer
            let length = parseInt(str.substring(i, j));

            // Move the pointer to the position right after the '#' character
            i = j + 1;

            // Extract the actual string using the length
            j = i + length;
            res.push(str.substring(i, j));

            // Move the pointer to the next encoded segment
            i = j;
        }

        // Return the final array of decoded strings
        return res;
    }
}

// Example usage:

// Encode the array of strings
const res = new Solution().encode(['Hi', 'There']);
console.log(res); // Output: "2#Hi5#There"

// Decode the encoded string back into an array of strings
console.log(new Solution().decode(res)); // Output: ["Hi", "There"]
