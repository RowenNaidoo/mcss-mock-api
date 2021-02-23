'use strict';

exports.clientConfiguration = function (_, response) {
  response.writeHead(200, {
    'Content-Type': 'application/json',
    uxfauthorization: 'somerandomauthheader'
  }).end(JSON.stringify({}));
};

exports.userInformation = function (_, response) {
  var userInfo = {
    ImplUserLoginInfo: {
      userId: 'DE1893',
      roles: ['W2'],
      teams: ['Apple Stores', 'Apple'],
      sites: [{
        siteId: 'AS001',
        siteName: 'Apple Sydney',
        salesChannel: 'MSDL',
        effectiveDate: '01011753',
        endDate: '01011753',
        vendorType: 'Apple',
        vendorTypeRefId: 'Apple'
      }]
    }
  };

  response.writeHead(200, {
    'Content-Type': 'application/json'
  }).end(JSON.stringify(userInfo));
};

exports.dealerLogin = function (_, response) {
  response.status(200).end(JSON.stringify({}));
};