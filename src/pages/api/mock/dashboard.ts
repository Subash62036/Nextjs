const successResponse = {
  message: 'success',
  data: {
    totalNumbersOfCustomer: 50,
    totalNumbersOfCaptain: 50,
    pendingCaptainApproval: 50,
    totalNumbersOfRide: 50,
  },
};

export default (req, res) => {
  res.status(200).json(successResponse);
  // res.status(406).end();
};
