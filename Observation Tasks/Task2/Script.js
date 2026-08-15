
// Student class
class Student {

    constructor(name, rollNo, department, cgpa) {
        this.name = name;
        this.rollNo = rollNo;
        this.department = department;
        this.cgpa = cgpa;
    }
}

// Select button using DOM
const button = document.getElementById("createProfile");

// Event handling
button.addEventListener("click", function () {

    // Get user-provided values
    const name = document.getElementById("name").value;
    const rollNo = document.getElementById("rollNo").value;
    const department = document.getElementById("department").value;
    const cgpa = document.getElementById("cgpa").value;

    // Check whether all fields are entered
    if (name === "" || rollNo === "" || department === "" || cgpa === "") {
        alert("Please enter all student details.");
        return;
    }

    // Create Student object
    const student = new Student(
        name,
        rollNo,
        department,
        cgpa
    );

    // Select profile container
    const profileContainer =
        document.getElementById("profileContainer");

    // Clear previous profile
    profileContainer.innerHTML = "";

    // Dynamically create profile card
    const profile = document.createElement("div");
    profile.className = "profile";

    // Create heading
    const heading = document.createElement("h2");
    heading.textContent = "Student Profile";

    // Create student details
    const nameElement = document.createElement("p");
    nameElement.innerHTML =
        "<strong>Name:</strong> " + student.name;

    const rollElement = document.createElement("p");
    rollElement.innerHTML =
        "<strong>Roll No:</strong> " + student.rollNo;

    const departmentElement = document.createElement("p");
    departmentElement.innerHTML =
        "<strong>Department:</strong> " + student.department;

    const cgpaElement = document.createElement("p");
    cgpaElement.innerHTML =
        "<strong>CGPA:</strong> " + student.cgpa;

    // Add elements to profile
    profile.appendChild(heading);
    profile.appendChild(nameElement);
    profile.appendChild(rollElement);
    profile.appendChild(departmentElement);
    profile.appendChild(cgpaElement);

    // Add profile to webpage
    profileContainer.appendChild(profile);
});