const chai = require('chai')
const deepEqualInAnyOrder = require('deep-equal-in-any-order')
const expect = chai.expect
const findtodos = require('../index.js')
const path = require('path')
const fs = require('fs')
const filePath = path.join(__dirname, '../somedir')
console.log(filePath)
chai.use(deepEqualInAnyOrder)

describe('Find Todos!', () => {
  it ('should print absolute paths of files containing string TODO', () => {
    findtodos(filePath, (files) => {
      const array = [
        '/somedir1/somemodule/somefile.js',
        '/somedir1/somemodule/someotherfile.js',
        '/somedir2/another_dir/index.js',
        '/somedir2/another_dir/yet_another_dir/index.js',
        '/somedir2/index.js',
        '/somedir3/another_file.js'
      ]
      const arrayNew = array.map(item => {
        return filePath + item
      })
      expect(files).to.deep.equalInAnyOrder(arrayNew)
    })
  })
})
