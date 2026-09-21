const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

const STORAGE_DIR = path.join(__dirname, 'files');

function ask(query) {
return new Promise((resolve) =>
rl.question(query, (answer) => resolve(answer)));
}

function ensureStorageDir() {
if (!fs.existsSync(STORAGE_DIR)) {
fs.mkdirSync(STORAGE_DIR);
console.log('Storage folder created at: ' + STORAGE_DIR);
}
}

function isValidFileName(name) {
if (!name || name.trim() === '') return false;

if (name.includes('/') || name.includes('\\'))
return false;

return true;
}

async function main() {

console.log('==============================================');
console.log(' NODE.JS FILE MANAGEMENT APPLICATION ');
console.log('==============================================');

ensureStorageDir();

let fileName =
await ask('Enter the file name (example: notes.txt) : ');

fileName = fileName.trim();

if (!isValidFileName(fileName)) {

console.error(
'ERROR: Invalid file name. Please avoid empty names and slashes.'
);

rl.close();
return;
}

if (path.extname(fileName) === '') {
fileName = fileName + '.txt';
}

const filePath =
path.join(STORAGE_DIR, fileName);

const content =
await ask('Enter the content to write : ');

if (content.trim() === '') {

console.error(
'ERROR: Content cannot be empty.'
);

rl.close();
return;
}

try {

fs.writeFileSync(
filePath,
content + '\n',
'utf8'
);

console.log(
'\n[1] WRITE : File created successfully -> '
+ fileName
);

const initialData =
fs.readFileSync(filePath, 'utf8');

console.log(
'[2] READ : Current contents of the file :'
);

console.log('------------------------------------------');

console.log(initialData.trim());

console.log('------------------------------------------');

const extra =
await ask('Enter additional content to append : ');

fs.appendFileSync(
filePath,
extra + '\n',
'utf8'
);

console.log(
'[3] APPEND : Additional content appended successfully.'
);

const finalData =
fs.readFileSync(filePath, 'utf8');

console.log(
'[4] FINAL CONTENTS OF ' + fileName + ' :'
);

console.log('==========================================');

console.log(finalData.trim());

console.log('==========================================');

const stats =
fs.statSync(filePath);

console.log(
'File size : ' + stats.size + ' bytes'
);

console.log(
'Location : ' + filePath
);

} catch (err) {

console.error(
'FILE OPERATION FAILED : ' + err.message
);

} finally {

rl.close();

}

}

main();