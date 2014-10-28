'use strict';

var Application = module.exports = {
  initialize: function initializeApp() {
    this.homeView = new HomeView();
    this.router = new Router();
  }
};

var $ = require('jquery');
var Backbone = require('backbone');
var HomeView = require('views/home_view');
var Router = require('routers/main');

$(function() {
  Application.initialize();
  Backbone.history.start();
});
