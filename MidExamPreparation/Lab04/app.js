const os = require('os');
const fs = require('fs');
const http = require('http');

/****Exercise 01 */
//console.log("Hello world!!!");

/***Exercise 02 */
/*console.log('Architecture '+os.arch());
console.log('CPUs '+os.cpus().length);
console.log('-------CPUs Information Elaborated-----');
console.log(os.cpus());
console.log('os '+os.platform());*/


/****Exercise 03 */
/*
const filename = __dirname + '/test.txt';

//Read synchronously
fs.readFile(filename,(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
});

//Read Asynchronously
const data = fs.readFileSync(filename); 
console.log(data.toString());*/


/***Exercise 04 */
/*
const fileName = __dirname + '/test.txt'; 
const outFileName = __dirname + '/test-copy.txt';


const readStream = fs.createReadStream(fileName); 
const writeStream = fs.createWriteStream(outFileName);

readStream.pipe(writeStream);*/

http.createServer((req, res) => {
    console.log('The server is started!!!!!'); 
    res.setHeader('Content-Type', 'text/html'); 
    res.write('<h1>Hello World</h1>'); 
    res.end(); 
}).listen(3000);
