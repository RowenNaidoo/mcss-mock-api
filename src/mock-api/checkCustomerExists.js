module.exports = (request, response) => {
  const {
    ImplFindContactByEmailInput: { email }
  } = request.body;

  const responseBody = JSON.stringify({
    ImplFindContactByEmailOutput: { contactExist: email === 'john@smith.com' }
  });

  response
    .writeHead(200, {
      'Content-Type': 'application/json'
    })
    .end(responseBody);
};
