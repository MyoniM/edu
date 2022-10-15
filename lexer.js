const moo = require('moo');

let lexer = moo.compile({
  WS: /[ \t]+/,
  comment: /\/\/.*?$/,
  number: /0|[1-9][0-9]*/,
  string: /"(?:\\["\\]|[^\n"\\])*"/,
  keyword: ['true', 'false'],
  // identifiers could be amh/eng/_/nums
  identifier: /[\u1200-\u137Fa-zA-Z][\u1200-\u137Fa-zA-Z_0-9]*/,
  lParen: '(',
  rParen: ')',
  lSquareParen: '[',
  rSquareParen: ']',
  lBrace: '{',
  rBrace: '}',
  fatArrow: '=>',
  assign: ':=',
  NL: { match: /\r?\n/, lineBreaks: true },
});

module.exports = lexer;
