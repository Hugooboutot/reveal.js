'use strict';

var moment = require('moment');
moment.lang('fr');

function formatCommentStamp(stamp) {
  return moment(stamp).format('LLL');
}

module.exports = {
  formatCommentStamp: formatCommentStamp
};
