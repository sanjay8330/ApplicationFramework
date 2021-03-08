//Question 02
//Importing from os system module
const os = require('os');

//Importing from fs system module
const fs = require('fs');

//Importing from http system module
const http = require('http');

const fileName = __dirname + '/test.txt';

//Question 01
console.log('Hello World');

//Obtaining the OS information
console.log('Architecture :'+os.arch());
console.log('CPUs ' + os.cpus().length);
console.log('OS ' + os.platform());

//Getting the file.
const fileName2 = __dirname + '/test.txt';

//Reading the data from file -- Method 1 --
fs.readFile(fileName2, (err, data) => {
    if (err) {
        console.error(err);
    }
    console.log(data.toString());
});
   
//Reading the data from file -- Method 2 --
const data = fs.readFileSync(fileName);
console.log(data.toString());


//Creating a copy of a file and adding the same data to it
const fileName3 = __dirname + '/test.txt';
const outFileName = __dirname + '/test-copy.txt';

const readStream = fs.createReadStream(fileName3);
const writeStream = fs.createWriteStream(outFileName);

readStream.pipe(writeStream);

readStream.on('data', data => {
    console.log(data.toString());
});

//Creating the http server GET Request
http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello World</h1>');
    res.end();
}).listen(3000);

