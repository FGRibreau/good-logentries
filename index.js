'use strict';

var _ = require('lodash');
var utils = require('good/lib/utils');
var Logentries = require('le_node');

/**
 * Constructor
 *
 * @param {object} events  List of events to log https://github.com/hapijs/good
 * @param {object} config  Anything you can pass to the `le_node` constructor
 */
function GoodLogentries(events, config) {
  if (! (this instanceof GoodLogentries)) {
    return new GoodLogentries(events, config);
  }

  this.logentries = new Logentries(config);
}

GoodLogentries.prototype.init = function(readstream, emitter, callback) {
  readstream.on('data', function(item) {
    if (item instanceof utils.GreatResponse) {
      // For best use with logentries, you probably want to enable the `request`
      // log event instead of using this, as it is very difficult to query.
      item = _.omit(item, 'log');
    }

    this.logentries.log(item);
  }.bind(this));

  emitter.on('stop', function() {
    this.logentries.end();
  }.bind(this));

  callback();
};

module.exports = GoodLogentries;
