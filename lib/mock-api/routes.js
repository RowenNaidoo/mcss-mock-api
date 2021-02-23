'use strict';

var bodyParser = require('body-parser');
var multer = require('multer');

var _require = require('./storeSelection'),
    clientConfiguration = _require.clientConfiguration,
    userInformation = _require.userInformation,
    dealerLogin = _require.dealerLogin;

var _require2 = require('./utils'),
    checkAuthToken = _require2.checkAuthToken;

var _require3 = require('./idVerification'),
    idList = _require3.idList;

var checkCustomerExists = require('./checkCustomerExists');
var login = require('./login');

var _require4 = require('./verifyNumber'),
    validateOtp = _require4.validateOtp,
    generateOtp = _require4.generateOtp;

var _require5 = require('./numberSelect'),
    searchNumber = _require5.searchNumber,
    updateNumberStatus = _require5.updateNumberStatus;

var _require6 = require('./simTypeSelection'),
    captureSim = _require6.captureSim,
    captureSimDevice = _require6.captureSimDevice;

var _require7 = require('./confirmOrder'),
    cartQuote = _require7.cartQuote,
    validateOrder = _require7.validateOrder;

exports.routes = function (app) {
  app.use(bodyParser.json());
  app.use(multer().array());
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.post('/CheckCustomerExists', checkCustomerExists);
  app.post('/SsoLogin', login);
  app.get('/retail-webapp/application/client/configuration', clientConfiguration);
  app.get('/retail-webapp/retail/user/information', checkAuthToken(userInformation));
  app.post('/retail-webapp/dealer/siteId/:siteId/team/:team', checkAuthToken(dealerLogin));
  app.get('/retail-webapp/application/idList', idList);
  app.post('/retail-webapp/ppvservice/generateotp', generateOtp);
  app.post('/retail-webapp/ppvservice/validateOTP', validateOtp);
  app.post('/retail-webapp/sdp/manageResource/searchNumber', searchNumber);
  app.post('/retail-webapp/sdp/manageResource/updateStatus', updateNumberStatus);
  app.get('/retail-webapp/ecommerce/order/:orderId/capture-sim', captureSim);
  app.put('/retail-webapp/ecommerce/captureSimDevice', captureSimDevice);
  app.get('/retail-webapp/ecommerce/order/:orderId/cart-quote', cartQuote);
  app.post('/retail-webapp/ordering/customer/:customerId/order/:orderId/validateOrderSummary', validateOrder);
};