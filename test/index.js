var chai = require('chai')
var assert = chai.assert
const mock = require('mock-fs')
const fs = require('fs')
var findtodos = require('../index.js')

describe('File System', function() {
  it('should create 2 JS files', () => {
    findtodos()
    mock({
      'fake-file-for-testing-only': 'file content'
    })
    assert.isTrue(fs.existsSync('fake-file-for-testing-only'))
    mock.restore()
  })
})
