var chai = require('chai')
var expect = chai.expect
var findtodos = require('../index.js')
const path = require('path')
const fs = require('fs')
var filePath = path.join(__dirname, '../somedir')

describe('File System', function() {

  // My Function Does NOT need to Create Files
  // My Function will loop through directory to find TODO files

  // Read Directory And Check If Folders Or Files exists
  // If Folder Exist, Loop Internally and Check if folder or file
  // If File, read file and check TODO, append File Path To External Array

  it ('should return 3 folders', () => {
    let result
    findtodos(filePath, (files) => {
      const array = ['somedir1', 'somedir2', 'somedir3']
      expect(files).to.deep.equal(array)
    })
  })
  

})
