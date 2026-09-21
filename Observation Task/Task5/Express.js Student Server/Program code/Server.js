const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.json());

app.use((req, res, next) => {

const time = new Date().toLocaleTimeString();

console.log(
`[${time}] ${req.method} request received for ${req.url}`
);

next();

});

const students = [

{
id: 1,
name: 'K. Sirisha',
roll: 'A24126552260',
branch: 'CSE',
year: 2,
cgpa: 9.1
},

{
id: 2,
name: 'N. Samhavya',
roll: 'A24126552099',
branch: 'CSE',
year: 2,
cgpa: 8.8
},

{
id: 3,
name: 'R. Harshitha',
roll: 'A24126552104',
branch: 'CSE',
year: 2,
cgpa: 8.5
},

{
id: 4,
name: 'M. Praveen',
roll: 'A24126552117',
branch: 'CSE',
year: 2,
cgpa: 8.2
},

{
id: 5,
name: 'S. Lokesh',
roll: 'A24126552133',
branch: 'CSE',
year: 2,
cgpa: 7.9
}

];


app.get('/', (req, res) => {

res.status(200).send(`
<html>

<head>
<title>Student Server</title>
</head>

<body style="font-family: Arial, sans-serif; padding: 30px;">

<h1>Welcome to the Student Management Server</h1>

<p>This server was built using Node.js and Express.js.</p>

<h3>Available Routes</h3>

<ul>

<li>
<a href="/students">
/students
</a>
- returns the list of all students (JSON)
</li>

<li>
<a href="/about">
/about
</a>
- information about this application
</li>

</ul>

</body>

</html>
`);

});


app.get('/students', (req, res) => {

res.status(200).json({

success: true,

count: students.length,

data: students

});

});


app.get('/students/:id', (req, res) => {

const id =
parseInt(req.params.id, 10);

const student =
students.find(s => s.id === id);

if (!student) {

return res.status(404).json({

success: false,

message:
`Student with id ${id} not found`

});

}

res.status(200).json({

success: true,

data: student

});

});


app.get('/about', (req, res) => {

res.status(200).json({

application:
'Student Management Server',

description:
'A basic REST-style server that stores and returns student details.',

course:
'Full Stack Web Development (23CM4121)',

developedBy:
'K. Sirisha (A24126552260)',

technologies:
[
'Node.js',
'Express.js',
'JavaScript (ES6)'
],

version: '1.0.0'

});

});


app.post('/students', (req, res) => {

const {
name,
roll,
branch,
year,
cgpa
} = req.body;

if (!name || !roll) {

return res.status(400).json({

success: false,

message:
'Name and roll number are required fields'

});

}

const newStudent = {

id: students.length + 1,

name,

roll,

branch: branch || 'CSE',

year: year || 1,

cgpa: cgpa || 0

};

students.push(newStudent);

res.status(201).json({

success: true,

message: 'Student added',

data: newStudent

});

});


app.use((req, res) => {

res.status(404).json({

success: false,

message:
`Route ${req.url} not found on this server`

});

});


app.listen(PORT, () => {

console.log(
'Server is running at http://localhost:' + PORT
);

console.log(
'Available routes : / | /students | /students/:id | /about'
);

});