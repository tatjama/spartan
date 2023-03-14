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


/*=============================================
=            HTTP module GET                  =
=============================================*/

const https = require('https');

https.get('https://reqres.in/api/users?page=2', (response) => {
  let data = '';

  response.on('data', (chunk) => {
    data += chunk;
  });

  response.on('end', () => {
    const users = JSON.parse(data).data;
    users.forEach(user => {
      console.log(`${user.first_name}, ${user.last_name}`);
    });
  });

}).on("error", (error) => {
  console.error(error);
});

/*=====  End of HTTP module GET        ======*/




