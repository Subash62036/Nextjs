const successResponse = {
  message: 'OTP Entered Successfully',
};

export default (req, res) => {
  res.status(200).json(successResponse);
  // res.status(406).end();
};
