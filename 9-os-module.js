
const os = require('os');

//get info about current user
const user = os.userInfo();

//get the system uptime 


console.log(user);

console.log(`The system has been up for ${os.uptime()} seconds `);