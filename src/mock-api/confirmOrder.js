const cartQuoteResponse = require('./mock-response/cartQuote.json');
const validateOrderResponse = require('./mock-response/validateOrder.json');

exports.cartQuote = (_, response) => {
  response.status(200).end(JSON.stringify(cartQuoteResponse));
};

exports.validateOrder = (_, response) => {
  response.status(200).end(JSON.stringify(validateOrderResponse));
};
