const fs = require('fs');
const path = require('path');


/*=============================================
=            Create folder test               =
=============================================*/

fs.mkdir(path.join(__dirname, "./test"), {}, err => {
    if(err) throw err;
    console.log('Created folder test');
})


/*=====  End of Create folder test     ======*/


/*==============================================================
=            Create file file.js and helloworld.txt             =
=================================================================*/

fs.writeFile(path.join(__dirname, "./test/file.js"), "const hello = 'Hello world'", err => {
    if(err) throw err;
    console.log('Created file file.js');
})

fs.writeFile(path.join(__dirname, './test/helloworld.txt'), "Hello world", err => {
    if(err) throw err;
    console.log('Created file hello world')
})

/*=====  End of Create file file.js and helloworld.txt    ======*/


/*=======================================================================
=            Using exec from child_process for listing files            =
=========================================================================*/

const { exec } = require ('child_process');

const directoire = 'C:\\projects\\github\\spartan\\back\\test';

exec(`cd ${directoire} && dir`, (err, stdout, stderr) => {
    if(err) {
        console.log(`exec error: ${err}`);
        return
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
})


/*=====  End of Using exec from child_process for listing files  ======*/


