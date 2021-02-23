'use strict';

module.exports = function (request, response) {
  var _request$body = request.body,
      user = _request$body.user,
      password = _request$body.password;

  if (user === 'admin' && password === 'admin') {
    response.cookie('SsoCookie', 'sso-cookie-value', {
      maxAge: 900000,
      httpOnly: true
    }).status(302).redirect('https://www.google.com.au');
  } else {
    response.status(302).redirect('http://localhost:4502/content/optus/en/dnav/shailesh-test.html?SMAUTHREASON=51');
  }
};