
import axios from './httpService'
import { PRODUCT } from '../Constants/constants'

// export function getAllProducts () {
//   return {
//     type: PRODUCT.FETCH_PRODUCTS
//   }
// }
export const createProduct = (product) => (dispatch) => new Promise((resolve) => {
  axios.post('http://localhost:5000/products', { product })
    .then((res) => res.data || {})
    .then(({ success, data }) => {
      if (success) return resolve(dispatch({ data, type: PRODUCT.CREATE_PRODUCT }))
      return resolve(dispatch({ data: [], type: PRODUCT.CREATE_PRODUCT }))
    })
    .catch((e) => {
      return resolve(dispatch({ data: [], type: PRODUCT.CREATE_PRODUCT }))
    })
})

export const getProduct = (product) => (dispatch) => new Promise((resolve) => {
  axios.patch(`http://localhost:5000/products/${product._id}`)
    .then((res) => res.data || {})
    .then(({ success, data }) => {
      if (success) return resolve(dispatch({ data, type: PRODUCT.GET_A_PRODUCT }))
      return resolve(dispatch({ data: [], type: PRODUCT.GET_A_PRODUCT }))
    })
    .catch((e) => {
      return resolve(dispatch({ data: [], type: PRODUCT.GET_A_PRODUCT }))
    })
})

export const updateProduct = (product) => (dispatch) => new Promise((resolve) => {
  axios.patch(`http://localhost:5000/products/${product._id}`)
    .then((res) => res.data || {})
    .then(({ success, data }) => {
      if (success) return resolve(dispatch({ data, type: PRODUCT.UPDATE_PRODUCT }))
      return resolve(dispatch({ data: [], type: PRODUCT.UPDATE_PRODUCT }))
    })
    .catch((e) => {
      return resolve(dispatch({ data: [], type: PRODUCT.UPDATE_PRODUCT }))
    })
})

export const fetchProducts = () => (dispatch) => new Promise((resolve) => {
  axios.get('http://localhost:5000/products')
    .then((res) => res.data || {})
    .then(({ success, data }) => {
      if (success) return resolve(dispatch({ data, type: PRODUCT.FETCH_PRODUCTS }))
      return resolve(dispatch({ data: [], type: PRODUCT.FETCH_PRODUCTS }))
    })
    .catch((e) => {
      return resolve(dispatch({ data: [], type: PRODUCT.FETCH_PRODUCTS }))
    })
})

export const deleteProduct = (id) => (dispatch) => new Promise((resolve) => {
  axios.delete(`http://localhost:5000/products/${id}`)
    .then((res) => res.data || {})
    .then(({ success, data }) => {
      if (success) return resolve(dispatch({ data, type: PRODUCT.DELETE_PRODUCT }))
      return resolve(dispatch({ data: [], type: PRODUCT.DELETE_PRODUCT }))
    })
    .catch((e) => {
      return resolve(dispatch({ data: [], type: PRODUCT.DELETE_PRODUCT }))
    })
})

// export function createProduct (data) {
//   return {
//     type: PRODUCT.CREATE_PRODUCT,
//     data: data
//   }
// }

// export function deleteProduct (id) {
//   return {
//     type: PRODUCT.DELETE_PRODUCT,
//     id: id
//   }
// }

// export function updateProduct (id, data) {
//   return {
//     type: PRODUCT.UPDATE_PRODUCT,
//     data: data
//   }
// }

// export function getAProduct (id) {
//   return {
//     type: PRODUCT.GET_A_PRODUCT,
//     id: id
//   }
// }
