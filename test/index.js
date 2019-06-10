var chai = require('chai')
var assert = chai.assert
const mock = require('mock-fs')
const fs = require('fs')

describe('mock()', function() {
    it('configures the real fs module with a mock file system', function() {
      mock({
        'fake-file-for-testing-only': 'file content'
      })
      assert.isTrue(fs.existsSync('fake-file-for-testing-only'))
      mock.restore()
    })
})
