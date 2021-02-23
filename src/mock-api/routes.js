const bodyParser = require('body-parser');
const multer = require('multer');
const {
  clientConfiguration,
  userInformation,
  dealerLogin,
} = require('./storeSelection');
const { checkAuthToken } = require('./utils');
const { idList } = require('./idVerification');

const checkCustomerExists = require('./checkCustomerExists');
const login = require('./login');
const { validateOtp, generateOtp } = require('./verifyNumber');
const { searchNumber, updateNumberStatus } = require('./numberSelect');
const { captureSim, captureSimDevice } = require('./simTypeSelection');
const { cartQuote, validateOrder } = require('./confirmOrder');

exports.routes = app => {
  app.use(bodyParser.json());
  app.use(multer().array());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

  app.post('/CheckCustomerExists', checkCustomerExists);
  app.post('/SsoLogin', login);
  app.get(
    '/retail-webapp/application/client/configuration',
    clientConfiguration
  );
  app.get(
    '/retail-webapp/retail/user/information',
    checkAuthToken(userInformation)
  );
  app.post(
    '/retail-webapp/dealer/siteId/:siteId/team/:team',
    checkAuthToken(dealerLogin)
  );
  app.get('/retail-webapp/application/idList', idList);
  app.post('/retail-webapp/ppvservice/generateotp', generateOtp);
  app.post('/retail-webapp/ppvservice/validateOTP', validateOtp);
  app.post('/retail-webapp/sdp/manageResource/searchNumber', searchNumber);
  app.post(
    '/retail-webapp/sdp/manageResource/updateStatus',
    updateNumberStatus
  );
  app.get('/retail-webapp/ecommerce/order/:orderId/capture-sim', captureSim);
  app.put('/retail-webapp/ecommerce/captureSimDevice', captureSimDevice);
  app.get('/retail-webapp/ecommerce/order/:orderId/cart-quote', cartQuote);
  app.post(
    '/retail-webapp/ordering/customer/:customerId/order/:orderId/validateOrderSummary',
    validateOrder
  );
};
