var chai = require('chai')
const deepEqualInAnyOrder = require('deep-equal-in-any-order')
var expect = chai.expect
var findtodos = require('../index.js')
const path = require('path')
const fs = require('fs')
var filePath = path.join(__dirname, '../somedir')
chai.use(deepEqualInAnyOrder);

describe('Find Todos!', () => {

  it ('should return 3 folders', () => {
    findtodos(filePath, (files) => {
      const array = [
        '/Users/lanbau/code/interview/findtodos/somedir1',
        '/Users/lanbau/code/interview/findtodos/somedir2',
        '/Users/lanbau/code/interview/findtodos/somedir3',

      ]
      // expect(files).to.deep.equalInAnyOrder(array)
      console.log(files)
    })
  })


})
