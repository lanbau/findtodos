var random = require('random-name')
var fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, '');


fs.readdir(filePath, (err, files) => {
  files.forEach(file => {
    if (file.includes('.js') && !file.includes('.json')) {
      console.log(file)
    }
  })
})


// const name = random.first().toLowerCase() + '.js'
//
// fs.writeFile(name, 'Yo MAMA', () => {
//     console.log('file created')
// })
