'use strict';

const flat = require('flat');
const Logentries = require('le_node');
const Stream = require('stream');

/**
 * Constructor
 *
 * @param {object} events  List of events to log https://github.com/hapijs/good
 * @param {object} config  Anything you can pass to the `le_node` constructor
 */
class GoodLogentries extends Stream.Writable {

  constructor(config) {
    super({ objectMode: true, decodeStrings: true });
    this.logentries = new Logentries(config);
  }

  _write(data, encoding, callback) {
    this.logentries.log(flat(data));
    setImmediate(callback);
  }
}

module.exports = GoodLogentries;
