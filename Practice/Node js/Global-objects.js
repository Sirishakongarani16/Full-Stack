//Global
global.name = "Sirisha";

console.log(global.name);
console.log(name);

//Global outside the function
global.name = "Anu";

function test() {
    console.log(global.name);
}

test();
console.log(global.name);

//console
//log
console.log("Hello Node.js");
//error
console.error("File not found");
//warn
console.warn("This is a warning");
//table
let students = [
    { id: 1, name: "Sunny" },
    { id: 2, name: "Kitty" }
];

console.table(students);

// process
console.log("🧠 Node Version:", process.version);
console.log("📁 Current Working Directory:", process.cwd());
console.log("🧪 Platform:", process.platform);

//Buffer
let buf = Buffer.from("Hello, Node.js!");
console.log("🔢 Buffer Length:", buf.length);
console.log("📦 Buffer Content:", buf.toString());

//Diectory name,File Name
console.log("📂 Directory Name:", __dirname);
console.log("📄 File Name:", __filename);

//settimeout
setTimeout(function() {
    console.log("After 3 seconds");
}, 3000);

//
console.log("Start");

setTimeout(function() {
    console.log("Middle");
}, 2000);

console.log("End");

//set interval and clear interval
let count = 0;

let timer = setInterval(() => {
    count++;

    console.log(count);

    if (count === 10) {
        clearInterval(timer);
    }
}, 1000);
