//Asynchronous File
const fs = require('fs');

// 1. WRITE
fs.writeFile('example.txt', 'Hello Node.js!', (err) => {
    if (err) throw err;
    console.log('File written successfully.');

    // 2. READ
    fs.readFile('example.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('File content:', data);

        // 3. APPEND
        fs.appendFile('example.txt', '\nWelcome to asynchronous file operations!', (err) => {
            if (err) throw err;
            console.log('Data appended successfully.');

            // Read updated content
            fs.readFile('example.txt', 'utf8', (err, data) => {
               if (err) throw err;
                console.log('Updated content:');
                console.log(data);

                // 4. DELETE
                fs.unlink('example.txt', (err) => {
                   if (err) throw err;
                    console.log('File deleted successfully.');
                });
            });
        });
    });
});

