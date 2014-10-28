'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var helpers = require('./helpers');

module.exports = Backbone.View.extend({
  initialize: function() {
    _.bindAll(this, 'template', 'getRenderData', 'render', 'afterRender');
  },

  template: function() {},

  getRenderData: function() {
    var basis = this.collection || this.model;
    return basis && basis.toJSON ? basis.toJSON() : basis;
  },

  render: function() {
    var presenter = this.getRenderData();
    if (!this.collection) {
      presenter = [presenter];
    }
    var markup = _.map(presenter, this.renderTemplate, this).join('');
    this.$el.html(markup);
    _.defer(this.afterRender);
    return this;
  },

  renderTemplate: function renderTemplate(obj, tmpl) {
    if (!_.isFunction(tmpl)) {
      tmpl = null;
    }
    tmpl = tmpl || this.template;
    var presenter = $.extend({}, helpers, obj);
    return tmpl(presenter);
  },

  afterRender: function() {}
});
