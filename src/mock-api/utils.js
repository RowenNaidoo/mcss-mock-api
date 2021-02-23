exports.checkAuthToken = routeFunction => (request, response) => {
  if (request.headers.authorization && request.headers.authorization !== '') {
    routeFunction(request, response);
  }

  response
    .status(500)
    .end(JSON.stringify({ error: 'No auth token present in request headers' }));
};
