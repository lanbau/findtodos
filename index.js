var random = require('random-name')
var fs = require('fs')

const name = random.first().toLowerCase() + '.js'

fs.writeFile(name, 'Yo MAMA', () => {
    console.log('file created')
})
