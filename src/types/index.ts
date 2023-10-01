export interface ILink {
  id: number
  title: string
  url: any
  icon: string
}
export interface IError {
  statusCode: number
  statusMessage: string
  message: string
}
export interface IProduct {
  id:number
  title:string
  price:number
  description:string
  category:string
  image:string
  rating: {
    rate: number;
    count: number;
}
}