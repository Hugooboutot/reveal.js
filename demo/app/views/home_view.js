'use strict';

var View = require('./view');
var CommentView = require('./comment_view');
var HistoryView = require('./history_view');

module.exports = View.extend({
  template: require('./templates/home'),

  afterRender: function afterHomeRender() {
    this.commentView = new CommentView({ el: this.$('#form') }).render();
    this.historyView = new HistoryView({ el: this.$('#history') }).render();
  }
});
