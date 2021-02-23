const data = require('./mock-response/numberList.json');

exports.searchNumber = (_, response) => {
  response.status(200).end(JSON.stringify(data));
};

exports.updateNumberStatus = (_, response) => {
  response.status(200).end(
    JSON.stringify({
      StatusResponse: {
        additionalText: '0444444441',
        status: 'SUCCESS'
      }
    })
  );
};
