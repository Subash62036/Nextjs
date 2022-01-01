const successResponse = {
  message: 'mock data',
  data: {
    id: 123,
    name: 'Abc kumar',
    phone: '989848383',
    email: 'abc.kumar@stackmybiz.com',
    createdAt: 167878993,
    rating: 3.5,
    city: 'Ranchi',
    state: 'Jharkhand',
    active: true,
    vehicle: {
      type: 'taxi',
      acceptBookingFor: 'both',
      brand: 'Maruti',
      model: 'Desire',
      color: 'yellow',
      numberPlate: 'JH-02Q-4291',
      vehicleImage: 'https://example.com/image.jpg',
      registrationCertificateFront: 'https://example.com/image.jpg',
      registrationCertificateBack: 'https://example.com/image.jpg',
      vehicleRegistrationYear: 2015,
    },
    licence: {
      licenceNumber: '192308467',
      licenceFrontImage: 'https://example.com/image.jpg',
      licenceBackImage: 'https://example.com/image.jpg',
      licenceExpiryDate: 'YYYY-DD-MM',
      verifiedBy: 'INVOID',
      verificationStatus: true,
      verifiedAt: 167878993,
    },
    aadhar: {
      aadhaarNumber: '192308468756',
      aadhaarFrontImage: 'https://example.com/image.jpg',
      aadhaarBackImage: 'https://example.com/image.jpg',
      verifiedBy: 'INVOID',
      verificationStatus: false,
      verifiedAt: 167878993,
    },
  },
};

export default (req, res) => {
  res.status(200).json(successResponse);
  // res.status(406).end();
};
