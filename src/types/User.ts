export interface IUserDetails {
  careerJourney?: string
  email: string
  experience: string
  firstName: string
  functionalRole: string
  userId: string
  isActive: true
  isSignedCompleted: false
  lastName: string
  phonenumber: null
  operationModes: []
  profileImage: null
  username: string
  redirect?: string
}

export interface IRegisterUserParams {
  email:string
  password:string
  firstName:string
  lastName:string
  username:string
  confirmPassword:string
}
