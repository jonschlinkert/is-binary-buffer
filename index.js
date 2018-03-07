'use strict';

const typeOf = require('kind-of');
module.exports = buf => typeOf(buf) === 'buffer' && require('file-type')(buf) !== null;
