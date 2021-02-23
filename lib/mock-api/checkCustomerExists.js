'use strict';

module.exports = function (request, response) {
  var email = request.body.ImplFindContactByEmailInput.email;


  var responseBody = JSON.stringify({
    ImplFindContactByEmailOutput: { contactExist: email === 'john@smith.com' }
  });

  response.writeHead(200, {
    'Content-Type': 'application/json'
  }).end(responseBody);
};