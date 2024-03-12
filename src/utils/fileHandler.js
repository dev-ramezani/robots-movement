const fs = require('fs')

const readLine = (filePath) => {
    return fs.readFileSync(filePath).toString().split('\r\n')
}

module.exports = readLine