const fs = require('fs');

// 1. WRITE
fs.writeFileSync('example.txt', 'Hello Node.js!');
console.log('File written successfully.');

// 2. READ
const data = fs.readFileSync('example.txt', 'utf8');
console.log('File content:', data);

// 3. APPEND
fs.appendFileSync('example.txt', '\nWelcome to synchronous file operations!');
console.log('Data appended successfully.');

// Read updated content
const updatedData = fs.readFileSync('example.txt', 'utf8');
console.log('Updated content:');
console.log(updatedData);

// 4. DELETE
fs.unlinkSync('example.txt');
console.log('File deleted successfully.');