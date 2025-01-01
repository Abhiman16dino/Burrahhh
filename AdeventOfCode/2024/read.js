const fs = require('fs');

// Path to your text file
const filePath = './1/List.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    console.log('File content:', data);
    // Process the text data here
});
