const fs = require('fs')

module.exports = (path, callback) => {
  var arr = []
  checkFile(path, arr)
  callback(arr)
}

function checkFile (path, arr) {
  let files = fs.readdirSync (path)
  files.forEach(file => {
    if (!file.includes('.js')) {
      checkFile(path + '/' + file, arr)
    }
    if (file.includes('.js')) {
      const content = fs.readFileSync(path + '/' + file, 'utf8')
      if (content.includes('TODO')) {
        arr.push(path + '/' + file)
      }
    }
  })
}
