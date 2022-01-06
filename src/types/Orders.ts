export interface IOrderDetails {
  data: IOrders
  message: string
  count: number
  total: number
  totalPages: number
}

export interface IOrders {
  
  id: number
  fromAddress: string
  toAddress: string
  createdAt: Date
  bookingStatus: string
}

export interface IDashboardDetails {
  data: IDashboard
  message: string
}

export interface IDashboard {
  
  totalNumbersOfCustomer: string
  totalNumbersOfCaptain: string
  pendingCaptainApproval: string
  totalNumbersOfRide: string
}

export interface ICustomerDetails {
  data: ICustomers
  message: string
  count: number
  total: number
  totalPages: number
}

export interface ICustomers {
  
  id: number
  name: string
  phone: number
  createdAt: Date
  totalRide: number
  rating: number
}

export interface ICaptainDetails {
  data: ICaptains
  message: string
  count: number
  total: number
  totalPages: number
}

export interface ICaptains {
  
  id: number
  totalTrips: number
  rating: number
  name: string
  phone: number
  createdAt: Date
}

export interface IOrderSpecificList {
  data: IOrderSpecific
  message: string
}

export interface IUserSpecific {
  id: number,
  name: string
  phone: number
  email: string
  createdAt: number
  rating: number
  city: string
  state: string
  active: boolean
}

export interface IBookingHistory {
  id: number,
  bookingStatus: string
}

export interface IVehicle {
      serviceType: string
      //acceptBookingFor: string
      vehicleBrand: string
      vehicleModel: string
      vehicleColor: string
      vehicleType: string
      vehicleImage: string
      vehicleRegistrationFrontImage: string
      vehicleRegistrationBackImage: string
      vehicleRegistrationNumber: string
      vehicleRegistrationYear: number
      verificationStatus: boolean
      verifiedAt: Date
      verifiedBy: string
}

export interface ILicence {
  licenceNumber: string
      licenceFrontImage: string
      licenceBackImage: string
      licenceExpiryDate: string
      verifiedBy: string
      verificationStatus: boolean
      verifiedAt: number
}

export interface IAadhaar {
  aadharNumber: string
      aadharFrontImage: string
      aadharBackImage: string
      verifiedBy: string
      verificationStatus: boolean
      verifiedAt: number
}

export interface ITripDetails {
  id: number
  fromAddress: string
  toAddress: string
  createdAt: number
  fare: number
  bookingStatus: string
  numberPlate: string
  model: string
  bookingStatusHistory: IBookingHistory,
  rideStatusHistory: IBookingHistory
}

export interface IOrderSpecific {
  
  tripDetails: ITripDetails,
  captain: IUserSpecific,
  customer: IUserSpecific,
  id: number
  fromAddress: string
  toAddress: string
  createdAt: number
  fare: number
  bookingStatus: string
  numberPlate: string
  model: string
}

export interface IPersonalDetails {
  data: IUserSpecific
  message: string
}

export interface ICaptainSpecific {

  id: number,
  name: string
  phone: number
  email: string
  createdAt: number
  rating: number
  city: string
  state: string
  active: boolean
  vehicle: IVehicle
  licence: ILicence
  aadhar: IAadhaar
  captain: IUserSpecific

}

export interface ICaptainSpecificObject {
  data: ICaptainSpecific
  message: string
}