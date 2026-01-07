// A Promise is an object that represents the eventual completion 
// or failure of an asynchronous operation.

const fs = require('fs');
const path = require('path');

const loc1 = path.join(__dirname, 'data', 'input1.txt');
const loc2 = path.join(__dirname, 'data', 'input2.txt');
const loc = path.join(__dirname, 'data', 'output.txt');

const getData = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

getData(loc1)
    .then((x) => {
        getData(loc2)
            .then((y) => {

                let data1 = x.split('\r\n');
                let data2 = y.split('\r\n');

                let merged = [...data1, ...data2];
                merged.sort((a, b) => a - b);

                let outputData = merged.join('\n');

                fs.writeFile(loc, outputData, (err) => {
                    if (err) {
                        console.log("error in writing file");
                    } else {
                        console.log("output written successfully");
                    }
                });
            })
            .catch((err) => {
                console.log("error in reading file 2");
            });
    })
    .catch((err) => {
        console.log("error in reading file 1");
    });
