const os = require("os")

//info about current user
const user = os.userInfo()
console.log(user)

//uptime of computer
const up = os.uptime()
console.log(up)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem(),
    freeMem:os.freemem()
}

console.log(currentOS)