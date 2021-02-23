const data = require('./mock-response/idList.json');

exports.idList = (_, response) => {
  response
    .writeHead(200, {
      'Content-Type': 'application/json'
    })
    .end(JSON.stringify(data));
};
