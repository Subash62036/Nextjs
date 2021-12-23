const successResponse = {
  message: 'mock otp',
};

export default (req, res) => {
  res.status(200).json(successResponse);
  // res.status(406).end();
};
