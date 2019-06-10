const fs = require('fs')

module.exports = (path) => {
  var names = ['one', 'two']
  names.forEach(name => {
    fs.writeFile(path + '/' + name + '.js', 'TODOS', () => {
      console.log('file created')
    })
  })
}
