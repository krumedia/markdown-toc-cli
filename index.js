Toc = require('./lib/Toc');
PseudoEditor = require('./lib/PseudoEditor');
TextBuffer = require('text-buffer');
Range = require('text-buffer');
Point = require('text-buffer');

(function() {
'use strict';

function markdownTocCli(src, mode, options) {
  // throw error in case of non string input
  if (typeof src == 'undefined' || src === null)
    throw new Error('markdowntoccli(): input parameter is undefined or null');
  if (typeof src != 'string')
    throw new Error('markdowntoccli(): input parameter is of type ' +
      Object.prototype.toString.call(src) + ', string expected');

  var buffer = new TextBuffer({text: src});
  var editor = new PseudoEditor(buffer);

  var toc = new Toc(editor);

  if (typeof toc[mode] !== undefined) {
    toc[mode]()
  }

  // TODO: detect EOL-Style
  return editor.getBuffer().getLines().join('\n');
}



if (typeof module !== 'undefined' && typeof exports === 'object') {
  module.exports = markdownTocCli;
} else if (typeof define === 'function' && define.amd) {
  define(function() { return markdownTocCli; });
} else {
  this.markdownTocCli = markdownTocCli;
}

}).call(function() {
  return this || (typeof window !== 'undefined' ? window : global);
}());
