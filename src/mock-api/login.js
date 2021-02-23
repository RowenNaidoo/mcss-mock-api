module.exports = (request, response) => {
  const { user, password } = request.body;
  if (user === 'admin' && password === 'admin') {
    response
      .cookie('SsoCookie', 'sso-cookie-value', {
        maxAge: 900000,
        httpOnly: true
      })
      .status(302)
      .redirect('https://www.google.com.au');
  } else {
    response.status(302).redirect('http://localhost:4502/content/optus/en/dnav/shailesh-test.html?SMAUTHREASON=51');
  }
};
