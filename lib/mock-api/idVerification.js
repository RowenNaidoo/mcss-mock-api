'use strict';

var data = require('./mock-response/idList.json');

exports.idList = function (_, response) {
  response.writeHead(200, {
    'Content-Type': 'application/json'
  }).end(JSON.stringify(data));
};