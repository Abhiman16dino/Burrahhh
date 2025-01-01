const fs = require("fs");

// Path to your text file
const filePath = "./List.txt";

const readFileFromLocal = function () {
  const data = fs.readFileSync(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }
    // console.log(data);
    data = data;
  });
  return data;
};

const data = readFileFromLocal();

// const regex = /mul\(\d{1,3}\s*[,*]\s*\d{1,3}\)/g;

// const matches = data.match(regex);
// console.log(matches);

const getMul = (input) => {
  //const regex = /mul\((\d{1,3}),(\d{1,3})\)/;
  const regex = /mul\(\d{1,3}\s*[,*]\s*\d{1,3}\)|\bdo\(\)|\bdon't\(\)/g;
  // Match the string and extract numbers
  const match = input.match(regex);
  let sum = 0;
  let state = "DO";
  const isNum = (num) => {
    return num != 'do()' && num != 'don\'t()'
  }
  const toggleState = (s) => {
    if(s=='do()'){
        state = 'DO';
    }
    if(s=='don\'t()'){
        state = 'DONT'
    }
  }
  const newArr = [];

  match.forEach((element) => {
    toggleState(element);
    if(isNum(element) && state == 'DO'){
        newArr.push(element);
        // console.log(match)
    }
  });

  const regexForNum = /mul\((\d{1,3}),(\d{1,3})\)/;
  let newSum = 0;
  newArr.forEach(element => {
    const match = element.match(regexForNum);
    const num1 = parseInt(match[1], 10); // First number (826)
    const num2 = parseInt(match[2], 10); // Second number (659)
    newSum = newSum + num1 * num2;
  })

  console.log(newSum)



  //   console.log(match);

  //   if (match) {
  //     const num1 = parseInt(match[1], 10); // First number (826)
  //     const num2 = parseInt(match[2], 10); // Second number (659)
  //     // console.log(`First number: ${num1}, Second number: ${num2}`);
  //     return num1*num2;
  //   } else {
  //     console.log("No match found");
  //   }
};

getMul(data);
// let sum = 0;
// matches.forEach(item => {
//     sum = sum + getMul(item);
// })

// console.log(sum);
