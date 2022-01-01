const successResponse = {
  message: 'mock login',
  data: [
    {
      orderId: '0009784',
      from: 'Ranchi',
      to: 'Dhanbad',
      date: '30 Oct 2021',
      status: 'Completed',
      action: '0009784',
    },
    {
      orderId: '000111',
      from: 'Kolkata',
      to: 'Dhanbad',
      date: '30 Oct 2021',
      status: 'Cancelled',
      action: '0009733',
    },
    {
      orderId: '0009784',
      from: 'Ranchi',
      to: 'Dhanbad',
      date: '30 Oct 2021',
      status: 'Completed',
      action: '0009784',
    },
    {
      orderId: '0009733',
      from: 'Ranchi',
      to: 'Dhanbad',
      date: '30 Oct 2021',
      status: 'Cancelled',
      action: '0009733',
    },
    {
      orderId: '0009784',
      from: 'Ranchi',
      to: 'Dhanbad',
      date: '30 Oct 2021',
      status: 'Completed',
      action: '0009784',
    },
    {
      orderId: '0009733',
      from: 'Ranchi',
      to: 'Dhanbad',
      date: '30 Oct 2021',
      status: 'Cancelled',
      action: '0009733',
    },
    {
      orderId: '0009784',
      from: 'Ranchi',
      to: 'Dhanbad',
      date: '30 Oct 2021',
      status: 'Completed',
      action: '0009784',
    },
    {
      orderId: '0009733',
      from: 'Ranchi',
      to: 'Dhanbad',
      date: '30 Oct 2021',
      status: 'Cancelled',
      action: '0009733',
    },
  ],
};

export default (req, res) => {
  res.status(200).json(successResponse);
  // res.status(406).end();
};
