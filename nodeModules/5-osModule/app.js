const os = require("os");

console.log(os.EOL === "\n"); //true

console.log(os.hostname())
console.log(os.loadavg())
console.log(os.uptime())
console.log(os.freemem())
console.log(os.totalmem())
console.log(os.cpus())
console.log(os.type())
console.log(os.release())
console.log(os.networkInterfaces())
console.log(os.homedir())
console.log(os.userInfo())
// gives lots of info about this os :)
