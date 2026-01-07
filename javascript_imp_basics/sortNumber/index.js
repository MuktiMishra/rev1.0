// write code to sort numbers in ascending order from file input1.txt and input2.txt
// and write the sorted output to output.txt
const fs = require('fs');
const path = require('path');
const inputFile1 = path.join(__dirname, 'data', 'input1.txt');
const inputFile2 = path.join(__dirname, 'data', 'input2.txt');
const outputFile = path.join(__dirname, 'data', 'output.txt');  


// Read numbers from input files

const readNumbersFromFile = (filePath) => {
    const data = fs.readFileSync(filePath, 'utf-8');

    return data
        .split(/[,\s]+/)     // commas + spaces + newlines
        .filter(Boolean)
        .map(str => Number(str.trim()))
        .filter(num => !isNaN(num));
};


const numbers1 = readNumbersFromFile(inputFile1);
const numbers2 = readNumbersFromFile(inputFile2);
// Merge the two arrays
const mergedNumbers = [...numbers1, ...numbers2];

// Sort the numbers in ascending order
mergedNumbers.sort((a, b) => a - b);

// Write the sorted numbers to the output file
fs.writeFileSync(outputFile, mergedNumbers.join('\n'));
console.log('Sorted numbers written to', outputFile);

// The readNumbersFromFile function reads a text file using fs.readFileSync, which means Node.js
//  waits until the file is fully read before moving to the next line. The file is read as text 
//  using 'utf-8', then split using a regex so numbers can be separated by commas, spaces, or 
//  new lines. Empty values are removed, strings are converted to numbers, and invalid values (NaN) 
//  are filtered out.

// fs.writeFileSync writes data to a file synchronously, so the program waits until writing is 
// complete. Here, the sorted numbers are joined with new lines and written to output.txt. These 
// synchronous methods are simple and suitable for small scripts and assignments.