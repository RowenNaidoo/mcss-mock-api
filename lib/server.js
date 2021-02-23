'use strict';

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Dependencies
var _require = require('./mock-api/storeSelection'),
    clientConfiguration = _require.clientConfiguration,
    userInformation = _require.userInformation,
    dealerLogin = _require.dealerLogin;

var _require2 = require('./mock-api/utils'),
    checkAuthToken = _require2.checkAuthToken;

var _require3 = require('./mock-api/idVerification'),
    idList = _require3.idList;

var checkCustomerExists = require('./mock-api/checkCustomerExists');
var login = require('./mock-api/login');

var _require4 = require('./mock-api/verifyNumber'),
    validateOtp = _require4.validateOtp,
    generateOtp = _require4.generateOtp;

var _require5 = require('./mock-api/numberSelect'),
    searchNumber = _require5.searchNumber,
    updateNumberStatus = _require5.updateNumberStatus;

var _require6 = require('./mock-api/simTypeSelection'),
    captureSim = _require6.captureSim,
    captureSimDevice = _require6.captureSimDevice;

var _require7 = require('./mock-api/confirmOrder'),
    cartQuote = _require7.cartQuote,
    validateOrder = _require7.validateOrder;

//Declarations


var app = (0, _express2.default)();
app.disable('etag').disable('x-powered-by');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use((0, _cors2.default)());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());
app.use((0, _multer2.default)().array());

//get port
var port = process.env.PORT || 8080;

//get instance of express router
var router = _express2.default.Router();

//register routes
router.post('/CheckCustomerExists', checkCustomerExists);
router.post('/SsoLogin', login);
router.get('/retail-webapp/application/client/configuration', clientConfiguration);
router.get('/retail-webapp/retail/user/information', checkAuthToken(userInformation));
router.post('/retail-webapp/dealer/siteId/:siteId/team/:team', checkAuthToken(dealerLogin));
router.get('/retail-webapp/application/idList', idList);
router.post('/retail-webapp/ppvservice/generateotp', generateOtp);
router.post('/retail-webapp/ppvservice/validateOTP', validateOtp);
router.post('/retail-webapp/sdp/manageResource/searchNumber', searchNumber);
router.post('/retail-webapp/sdp/manageResource/updateStatus', updateNumberStatus);
router.get('/retail-webapp/ecommerce/order/:orderId/capture-sim', captureSim);
router.put('/retail-webapp/ecommerce/captureSimDevice', captureSimDevice);
router.get('/retail-webapp/ecommerce/order/:orderId/cart-quote', cartQuote);
router.post('/retail-webapp/ordering/customer/:customerId/order/:orderId/validateOrderSummary', validateOrder);

// all routes will be prefixed with /api
app.use('', router);

//start server
app.listen(port);
console.log('Magic happening on port ' + port);