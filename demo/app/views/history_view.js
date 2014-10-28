'use strict';

var View = require('./view');
var store = require('lib/persistence');

module.exports = View.extend({
  collection: store,
  subscriptions: {
    'checkins:new': 'render'
  },
  template: require('./templates/history_entry')
});
