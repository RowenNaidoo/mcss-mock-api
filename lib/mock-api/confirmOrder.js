'use strict';

var cartQuoteResponse = require('./mock-response/cartQuote.json');
var validateOrderResponse = require('./mock-response/validateOrder.json');

exports.cartQuote = function (_, response) {
  response.status(200).end(JSON.stringify(cartQuoteResponse));
};

exports.validateOrder = function (_, response) {
  response.status(200).end(JSON.stringify(validateOrderResponse));
};