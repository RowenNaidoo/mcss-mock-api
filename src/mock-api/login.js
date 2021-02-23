module.exports = (request, response) => {
  const { user, password } = request.body;
  if (user === 'admin' && password === 'admin') {
    response
      .cookie('SsoCookie', 'sso-cookie-value', {
        maxAge: 900000,
        httpOnly: true
      })
      .status(302)
      .redirect('/storeSelection.html');
  } else {
    response.status(302).redirect('/login.html?SMAUTHREASON=51');
  }
};
