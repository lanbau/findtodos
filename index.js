const fs = require('fs')

module.exports = (path, callback) => {

  var arr = []
  checkFile(path, arr)
  console.log(arr)
}

function checkFile (path, arr) {
  let files = fs.readdirSync (path)
  files.forEach(file => {
    if (!file.includes('.js')) {
      checkFile(path + '/' + file, arr)
    }
    if (file.includes('.js')) {
      arr.push(path + '/' + file)
    }
  })
}
