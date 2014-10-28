'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var application = require('application');

module.exports = Backbone.Router.extend({
  routes: {
    '': 'home'
  },

  home: function() {
    $('body > .container').html(application.homeView.render().el);
  }
});
