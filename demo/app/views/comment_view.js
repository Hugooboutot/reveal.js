'use strict';

var View = require('./view');
var store = require('lib/persistence');

module.exports = View.extend({
  events: {
    'submit': 'sendComment'
  },
  template: require('./templates/comment'),

  sendComment: function sendComment(e) {
    e.preventDefault();
    this.$author = this.$author || this.$('#author');
    this.$text = this.$text || this.$('#text');
    store.add({
      author: this.$author.val(),
      text: this.$text.val(),
      stamp: Date.now()
    });
    this.$text.val('');
    this.$author.val('').focus();
  }
});
