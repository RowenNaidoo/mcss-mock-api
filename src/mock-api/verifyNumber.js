exports.generateOtp = (_, response) => {
  response.status(200).end(
    JSON.stringify({
      ImplGenerateOTPResponse: {
        transactionId: 'ec562084-f3b8-4bdc-8094-2e01fba3d0da',
        challengerId: '3293398b-cdec-4bd6-ae28-cfa62e72d1e7',
        httpCode: 200,
        message: 'SUCCESS'
      }
    })
  );
};

exports.validateOtp = (_, response) => {
  response.status(200).end(
    JSON.stringify({
      ImplValidateOTPRestOutput: {
        transactionId: '6d14888c-0c8f-43fa-aea5-d14ae0906926',
        httpCode: 200,
        otpStatus: 'SUCCESS'
      }
    })
  );
};
