const chai = require('chai')
const deepEqualInAnyOrder = require('deep-equal-in-any-order')
const expect = chai.expect
const findtodos = require('../index.js')
const path = require('path')
const fs = require('fs')
const filePath = path.join(__dirname, '../somedir')

chai.use(deepEqualInAnyOrder)

describe('Find Todos!', () => {
  it ('should print absolute paths of files containing string TODO', () => {
    findtodos(filePath, (files) => {
      const array = [
        '/Users/lanbau/code/interview/findtodos/somedir/somedir1/somemodule/somefile.js',
        '/Users/lanbau/code/interview/findtodos/somedir/somedir1/somemodule/someotherfile.js',
        '/Users/lanbau/code/interview/findtodos/somedir/somedir2/another_dir/index.js',
        '/Users/lanbau/code/interview/findtodos/somedir/somedir2/another_dir/yet_another_dir/index.js',
        '/Users/lanbau/code/interview/findtodos/somedir/somedir2/index.js',
        '/Users/lanbau/code/interview/findtodos/somedir/somedir3/another_file.js'
      ]
      expect(files).to.deep.equalInAnyOrder(array)
    })
  })
})
