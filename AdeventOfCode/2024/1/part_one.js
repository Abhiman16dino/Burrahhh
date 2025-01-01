console.log("Hello");

const fs = require('fs');

// Path to your text file
const filePath = './List.txt';


const readFileFromLocal = function() {
    const data = fs.readFileSync(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }
        // console.log(data);
        data = data;
    });
    return data;
}

// Get input formatted
function splitIntoTwoArrays(data) {
    // Split the input data into lines
    console.log(data)
    const lines = data.trim().split('\n');

    // Initialize the two arrays
    const array1 = [];
    const array2 = [];

    // Process each line
    console.log(lines)
    lines.forEach(line => {
        const [num1, num2] = line.trim().split(/\s+/).map(Number);
        array1.push(num1);
        array2.push(num2);
    });
    // console.log("ssdsd")
    // console.log(array2)

    // Return the two arrays
    return { array1, array2 };
}

// Code to get the sum of distance
const add = (arrayOfNumbers) => {
  let sum = 0;
  for (item of arrayOfNumbers) {
    sum = sum + item;
  }
  return sum;
};

// Code to return the distance
const distanceFind = (a,b) => { return Math.abs(a-b) }

// Code to sort the list
const sortList = ( inputList ) => {
    return inputList.sort();
}

function main(){
    const data = readFileFromLocal();
    const { array1, array2 } = splitIntoTwoArrays(data);

    console.log(array2);

    const sortedList1 = sortList(array1);
    const sortedList2 = sortList(array2);

    var distance = sortedList1.map(function(item, index) {
        return distanceFind(item, sortedList2[index]);
      })
    const sum = add(distance)
    console.log(sum);

    // Similarity
    let Similarity = 0
    sortedList1.forEach(num => {
        let count = 0;
        sortedList2.forEach(oNum => {
            if(num == oNum){
                count++;
            }
        })
        Similarity = Similarity + count*num;
    });

    console.log("Similarity = " + Similarity);
}

main();
