//Question 02
//Importing from os system module
const os = require('os');

//Importing from fs system module
const fs = require('fs');

//Importing from http system module
const http = require('http');

//Importing from process module
const process = require('process');
const { read } = require('fs/promises');

//Finding the cpu usage
const usage = process.cpuUsage();


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
readStream.end;
const writeStream = fs.createWriteStream(outFileName);
writeStream.close;

//Overiding the end event
readStream.on('end',() => {
    console.log('Read stream is ended');
})

writeStream.on('close',() => {
    console.log('Write stream is ended');
})

readStream.pipe(writeStream);

readStream.on('data', data => {
    console.log(data.toString());
});



//Creating the http server GET Request
http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello World</h1>');

    //Creating a vaiable to get the status code
    const { statusCode } = res;
    let error;

    //Handling the error
    if (statusCode !== 200) {
        error = new Error('Request Failed.\n' + `Status Code: ${statusCode}`);
    } else if (!/^application\/json/.test(contentType)) {
        error = new Error('Invalid content-type.\n' + `Expected application/json but received ${contentType}`);
    }
    res.end();
}).listen(3000, (err) => {
    if(err){
        console.log(err);
    }
});

