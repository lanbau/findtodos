# Offline File Generators
# Print File Paths That Contains "TODO"


# Good To Know
```
var random = require('random-name')
var fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, '')


// fs.readdir(filePath, (err, files) => {
//   files.forEach(file => {
//     console.log(filePath + '.' + file)
//   })
// })

// var dir = './tmp'
// if (!fs.existsSync(dir)){
//     fs.mkdirSync(dir)
// }

// fs.readdir(filePath, (err, files) => {
//   files.forEach(file => {
//     if (file.includes('.js') && !file.includes('.json')) {
//       fs.readFile(file, 'utf8', (err, contents) => {
//         console.log(contents)
//       })
//     }
//   })
// })


// const name = random.first().toLowerCase() + '.js'
//
// fs.writeFile(name, 'Yo MAMA', () => {
//     console.log('file created')
// })

```
