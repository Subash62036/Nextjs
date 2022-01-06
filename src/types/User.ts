export interface IUserDetails {
  data : IDetails
}

export interface IRoles {

  name: string
  id: number
}

export interface IDetails {
  
  name: string
  phone: number
  roles : IRoles
}
