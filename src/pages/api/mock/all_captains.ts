const successResponse = {
  message: 'mock login',
  data: [
    {
      id: '0009784',
      captainName: 'Rober Fox',
      phone: '9876543210',
      dateJoined: '30 Oct 2021',
      totalRide: '30',
      rating: '4.5',
      action: '0009784',
      status: 'Approved',
    },
    {
      id: '0009784',
      captainName: 'Rober Fox',
      phone: '9876543210',
      dateJoined: '30 Oct 2021',
      totalRide: '30',
      rating: '4.5',
      action: '0009784',
      status: 'Pending',
    },
    {
      id: '0009784',
      captainName: 'Rober Fox',
      phone: '9876543210',
      dateJoined: '30 Oct 2021',
      totalRide: '30',
      rating: '4.5',
      action: '0009784',
      status: 'Approved',
    },
    {
      id: '0009784',
      captainName: 'Rober Fox',
      phone: '9876543210',
      dateJoined: '30 Oct 2021',
      totalRide: '30',
      rating: '4.5',
      action: '0009784',
      status: 'Pending',
    },
    {
      id: '0009784',
      captainName: 'Rober Fox',
      phone: '9876543210',
      dateJoined: '30 Oct 2021',
      totalRide: '30',
      rating: '4.5',
      action: '0009784',
      status: 'Approved',
    },
  ],
};

export default (req, res) => {
  res.status(200).json(successResponse);
  // res.status(406).end();
};
