'use strict';

const expect = require('chai').expect;

const lucene = require('../');

describe('queryParser', () => {
  describe('timellab test', () => {
    // term parsing
    it('handles location of field and term', () => {
      var results = lucene.parse('test:Foo');
      expect(results['left']['fieldLocation'].start.offset).to.equal(0);
      expect(results['left']['fieldLocation'].end.offset).to.equal(4);
      expect(results['left']['termLocation'].start.offset).to.equal(5);
      expect(results['left']['termLocation'].end.offset).to.equal(8);
    });

    it('fieldname without term', () => {
      var results = lucene.parse('test:');
      expect(results['left']['field']).to.equal('test');
      expect(results['left']['fieldLocation'].start.offset).to.equal(0);
      expect(results['left']['fieldLocation'].end.offset).to.equal(4);
    });
    it('just term', () => {
      var results = lucene.parse('test');
      expect(results['left']['term']).to.equal('test');
      expect(results['left']['termLocation'].start.offset).to.equal(0);
      expect(results['left']['termLocation'].end.offset).to.equal(4);
    });
  });
});
