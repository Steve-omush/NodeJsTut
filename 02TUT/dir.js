
const fs = require('fs');

//create a new directory called new in the same directory as dir.js
//checks if the directory does not exists, if the directory exists it is not created so as to avoid overwriting
if (!fs.existsSync('./new')) {
    fs.mkdir('./new', (err) => {
        if (err) throw err;
        console.log('Directory created');
    });
}


//deletes the new directory
if (fs.existsSync('./new')) {
    fs.rmdir('./new', (err) => {
        if (err) throw err;
        console.log('Directory removed');
    });
}
