import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

const { JSDOM } = jsdom;

const dom = new JSDOM('<!doctype html><html><body></body></html>');

global.window = dom.window;
global.document = dom.window.document;

Object.keys(dom.window).forEach((property) => {
  if (!(property in global)) {
    global[property] = window[property];
  }
});

chai.use(chaiImmutable);