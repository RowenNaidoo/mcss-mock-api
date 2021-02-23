exports.captureSim = (request, response) => {
  response.status(200).end(
    JSON.stringify({
      ImplCaptureSIMResponse: {
        transactionId: '5257e80a-37b2-436c-9451-8b63f89243ed',
        subscribers: [
          {
            isSim: true,
            isImei: true,
            serviceId: '0464613373',
            deviceProductId: '9508277986',
            mainProductId: '9508277977',
            simProductId: '9508277979',
            productOrderItemId: '14878288'
          }
        ]
      }
    })
  );
};

exports.captureSimDevice = (request, response) => {
  response.status(200).end(
    JSON.stringify({
      ImplSimAndDeviceDetailsOutput: {
        status: 'SUCCESS'
      }
    })
  );
};
