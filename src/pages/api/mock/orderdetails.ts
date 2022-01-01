const successResponse = {
  message: 'mock response',
  data: {
    tripDetails:
      {
        id: 1223,
        fromAddress: 'Lalpur Ranchi',
        toAddress: 'Ratu Ranchi',
        createdAt: 168986754,
        fare: 120.0,
        bookingStatus: 'CONFIRMED',
        numberPlate: 'JH-02Q-4291',
        model: 'Maruti',
        bookingStatusHistory: {
          id: 1234,
          bookingStatus: 'CONFIRMED',
        },
        rideStatusHistory: {
          id: 1134,
          bookingStatus: 'RIDE_COMPLETED',
        },
      },
    captain:
    {
      name: 'Abc kumar',
      phone: '989848383',
      email: 'abc.kumar@stackmybiz.com',
      createdAt: 167878993,
      rating: 3.5,
      city: 'Ranchi',
      state: 'Jharkhand',
    },
    customer:
    {
      name: 'Abc kumar',
      phone: '989848383',
      email: 'abc.kumar@stackmybiz.com',
      createdAt: 167878993,
      rating: 3.5,
      city: 'Ranchi',
      state: 'Jharkhand',
    },
  },
};

export default (req, res) => {
  res.status(200).json(successResponse);
  // res.status(406).end();
};
