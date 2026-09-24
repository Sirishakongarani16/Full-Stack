const os = require("os");
const path = require("path");
const fs = require("fs");


// os module
console.log("Operating System Information");
console.log("-----------------------------");

console.log("Operating System:", os.platform());
console.log("OS Type:", os.type());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());


// path module
console.log("\nPath Module Information");
console.log("-----------------------");

const filePath = path.join(__dirname, "sample.txt");

console.log("File Path:", filePath);
console.log("File Name:", path.basename(filePath));
console.log("Directory Name:", path.dirname(filePath));
console.log("File Extension:", path.extname(filePath));


// fs module
console.log("\nFile System Module");
console.log("------------------");

fs.writeFileSync(
    filePath,
    "This file is created using the fs module."
);

console.log("File created successfully.");

const data = fs.readFileSync(
    filePath,
    "utf8"
);

console.log("File Contents:", data);

fs.appendFileSync(
    filePath,
    "\nAdditional content added."
);

console.log("Content appended successfully.");