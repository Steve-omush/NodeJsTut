const fsPromises = require('fs').promises;
const path = require('path');


const fileOps = async () => {
    try {
        //read data from a file called starter.txt
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8');
        console.log(data);

        //unlink is a delete function. deletes a file called starter.txt
        await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'));

        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nNice to greet you mista');
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'));

        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf-8');
        console.log(newData)

    } catch (err) {
        console.error(err);
    }
}

fileOps();
// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// sconsole.log('Hello...');

// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to know you.', (err) => {
//     if (err) throw err;
//     console.log('Write Complete');

//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nVery Fine Sir', (err) => {
//         if (err) throw err;
//         console.log('Append Complete');

//         fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {
//             if (err) throw err;
//             console.log('Rename Complete');
//         })
//     })
// });



//exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
});