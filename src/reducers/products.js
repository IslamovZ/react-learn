import React from 'react'
const products = {
 pr:[
     {
    id: "1",
    name: "Lenovo A-5000",
    type: "Notebook",
    price: "18000",
    at_cart: ""
  },
  {
    id: "2",
    name: "Nikon D3500 Kit",
    type: "Camera",
    price: "25000",
    at_cart: ""
  },
  {
    id: "3",
    name: "Apple iPad",
    type: "Pad",
    price: "35000",
    at_cart: ""
  },
  {
    id: "4",
    name: "Samsung Galaxy",
    type: "Smartphone",
    price: "20000",
    at_cart: ""
  },
  {
    id: "5",
    name: "SUPRA",
    type: "TV",
    price: "19000",
    at_cart: ""
  }
]
}
export default (state=products) => {
    return state
}