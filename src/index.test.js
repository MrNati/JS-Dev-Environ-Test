import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('Index.html', () => {
  it('should say hello', (done) => {
    const indexHTML = fs.readFileSync('./src/index.html','utf-8');
    jsdom.env(indexHTML, function(err, window) {
      const paragraph = window.document.getElementsByTagName('p')[0];
      expect(paragraph.textContent).to.equal('Hello World');
      done();
      window.close();
    });
  });
});
