'use strict';

var data = require('./mock-response/numberList.json');

exports.searchNumber = function (_, response) {
  response.status(200).end(JSON.stringify(data));
};

exports.updateNumberStatus = function (_, response) {
  response.status(200).end(JSON.stringify({
    StatusResponse: {
      additionalText: '0444444441',
      status: 'SUCCESS'
    }
  }));
};