'use strict';

const expect = require('chai').expect;

const lucene = require('../');

function isEmpty(arr) {
  for (var i in arr) {
    return false;
  }
  return true;
}

describe('queryParser', () => {
  describe('whitespace handling', () => {
    // term parsing
    it('handles empty string', () => {
      var results = lucene.parse('test:Foo');
      expect(results['left']['fieldLocation'].start.offset).to.equal(0);
      expect(results['left']['fieldLocation'].end.offset).to.equal(4);
      expect(results['left']['termLocation'].start.offset).to.equal(5);
      expect(results['left']['termLocation'].end.offset).to.equal(8);
    });
  });
})
