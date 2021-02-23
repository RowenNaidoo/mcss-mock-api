import bodyParser from 'body-parser';
//Dependencies
import express from 'express';
import multer from 'multer';

const {
    clientConfiguration,
    userInformation,
    dealerLogin,
  } = require('./mock-api/storeSelection');
  const { checkAuthToken } = require('./mock-api/utils');
  const { idList } = require('./mock-api/idVerification');

  const checkCustomerExists = require('./mock-api/checkCustomerExists');
  const login = require('./mock-api/login');
  const { validateOtp, generateOtp } = require('./mock-api/verifyNumber');
  const { searchNumber, updateNumberStatus } = require('./mock-api/numberSelect');
  const { captureSim, captureSimDevice } = require('./mock-api/simTypeSelection');
  const { cartQuote, validateOrder } = require('./mock-api/confirmOrder');

//Declarations
const app = express();
app.disable('etag').disable('x-powered-by');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(multer().array());


//get port
const port = process.env.PORT || 8080;

//get instance of express router
const router = express.Router();

//register routes
router.post('/CheckCustomerExists', checkCustomerExists);
router.post('/SsoLogin', login);
router.get(
  '/retail-webapp/application/client/configuration',
  clientConfiguration
);
router.get(
  '/retail-webapp/retail/user/information',
  checkAuthToken(userInformation)
);
router.post(
  '/retail-webapp/dealer/siteId/:siteId/team/:team',
  checkAuthToken(dealerLogin)
);
router.get('/retail-webapp/application/idList', idList);
router.post('/retail-webapp/ppvservice/generateotp', generateOtp);
router.post('/retail-webapp/ppvservice/validateOTP', validateOtp);
router.post('/retail-webapp/sdp/manageResource/searchNumber', searchNumber);
router.post(
  '/retail-webapp/sdp/manageResource/updateStatus',
  updateNumberStatus
);
router.get('/retail-webapp/ecommerce/order/:orderId/capture-sim', captureSim);
router.put('/retail-webapp/ecommerce/captureSimDevice', captureSimDevice);
router.get('/retail-webapp/ecommerce/order/:orderId/cart-quote', cartQuote);
router.post(
  '/retail-webapp/ordering/customer/:customerId/order/:orderId/validateOrderSummary',
  validateOrder
);

// all routes will be prefixed with /api
app.use('', router);

//start server
app.listen(port);
console.log(`Magic happening on port ${port}`);
