// Function
function greet(name) {
    return "Hello " + name;
}

// Class
class Student {

    constructor(name, rollNo, branch) {
        this.name = name;
        this.rollNo = rollNo;
        this.branch = branch;
    }

    displayDetails() {
        console.log("Name: " + this.name);
        console.log("Roll No: " + this.rollNo);
        console.log("Branch: " + this.branch);
        console.log("----------------------");
    }
}

// Creating multiple objects
let student1 = new Student(
    "Sirisha",
    "A24126552260",
    "CSM"
);

let student2 = new Student(
    "Sravya",
    "A2412655257",
    "CSE"
);

// Function call
console.log(greet("Students"));

console.log("\nStudent 1 Details:");
student1.displayDetails();

console.log("Student 2 Details:");
student2.displayDetails();