'use strict';

window.jQuery = require('jquery');
require('bootstrap');
require('backbone').$ = window.jQuery;
delete window.jQuery;
require('backbone-mediator');

require('application');
