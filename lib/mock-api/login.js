'use strict';

module.exports = function (request, response) {
  var _request$body = request.body,
      user = _request$body.user,
      password = _request$body.password;

  if (user === 'admin' && password === 'admin') {
    response.cookie('SsoCookie', 'sso-cookie-value', {
      maxAge: 900000,
      httpOnly: true
    }).status(302).redirect('/storeSelection.html');
  } else {
    response.status(302).redirect('/login.html?SMAUTHREASON=51');
  }
};