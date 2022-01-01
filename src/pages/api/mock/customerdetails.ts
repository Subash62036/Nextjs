const successResponse = {
  message: 'mock data',
  data:
    {
      id: 123,
      name: 'Abc kumar',
      phone: '989848383',
      email: 'abc.kumar@stackmybiz.com',
      createdAt: 167878993,
      rating: 3.5,
      city: 'Ranchi',
      state: 'Jharkhand',
      active: false,
    },
};

export default (req, res) => {
  res.status(200).json(successResponse);
  // res.status(406).end();
};
