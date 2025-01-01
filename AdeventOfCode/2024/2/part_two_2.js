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

const data = readFileFromLocal();

const convertToArrays = (str) => {
    return str.trim().split('\n').map(line =>
      line.split(' ').map(Number)
    );
  };

  const listOfArrays = convertToArrays(data);


const checkIfSafeReport = ( report ) => {
    return checkIfIncreasingAndWithinRange(report) || checkIfDecreasingAndWithinRange(report);
}

const checkIfIncreasingAndWithinRange = (report) => {
  for (let index = 0; index < report.length - 1; index++) {
    const current = report[index];
    const next = report[index + 1];

    const diff = next - current

    if ((next < current) || diff < 1 || diff > 3 ) {
      return false;
    }
  }

  return true;
};

const checkIfDecreasingAndWithinRange = (report) => {
    for (let index = 0; index < report.length - 1; index++) {
      const current = report[index];
      const next = report[index + 1];

      const diff = current - next

      if ((current < next) || diff < 1 || diff > 3 ) {
        return false;
      }
    }

    return true;
  };

  const checkIfSafeWithOneRemoval = (report) => {
    for (let i = 0; i < report.length; i++) {
        // Create a new report by removing one level
        const modifiedReport2 = report.slice(0, i).concat(report.slice(i + 1));
        const modifiedReport = report.filter(item => item !== report[i]);
        console.log("----Not Same-----")
        if(JSON.stringify(modifiedReport) != JSON.stringify(modifiedReport2)){
            console.log(report[i])
            console.log(report)
            console.log(modifiedReport2)
            console.log(modifiedReport)
        }

        if (checkIfSafeReport(modifiedReport2)) {
            return true;
        }
    }
    return false;
};

  function main() {
    let count = 0;
    listOfArrays.forEach(element => {
        const isSafe = checkIfSafeReport(element) || checkIfSafeWithOneRemoval(element);
        if(isSafe){
            count++;
        }
    });
    console.log(count);
  }

  main();
