const fs = require('fs')

module.exports = (path, callback) => {
  const arr = []
  checkFile(path, arr)
  callback(arr)
}

const checkFile = (path, arr) => {
  fs.readdir (path, (files) => {
    console.log(files)
    files.forEach(file => {
      if (!file.includes('.js')) {
        checkFile(path + '/' + file, arr)
      }
      if (file.includes('.js')) {
        fs.readFile(path + '/' + file, 'utf8', (content) => {
          if (content.includes('TODO')) {
            arr.push(path + '/' + file)
          }
        })
        
      }
    })
  })
  
}
