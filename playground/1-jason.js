const fs = require('fs')
// const book = {
//      title : 'Ego is the Enemy',
//      author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJSON)

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData)
const dataBuffer = fs.readFileSync('1-json.json')
console.log(dataBuffer.toString())
const data = JSON.parse(dataBuffer.toString())
console.log(data.name)
console.log(data.age)