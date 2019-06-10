const fs = require('fs')

module.exports = (path, callback) => {
  fs.readdir(path, (err,files) => {
    callback(files)
  })
}
