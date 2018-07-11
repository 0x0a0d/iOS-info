const fs = require('fs')
const dataFile = __dirname + '/data.log'
module.exports = fs.readFileSync(dataFile).toString().trim().split('\n').map(line=>line.split('|'))