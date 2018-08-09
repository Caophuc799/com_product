
import axios from './httpService'
import { PRODUCT } from '../Constants/constants'

const URL = 'http://localhost:3006'

export const fetchProducts = () => (dispatch) => new Promise((resolve) => {
  axios.get(`${URL}/products`)
    .then((res) => {
      return res.data || {}
    })
    .then(({ success, data }) => {
      if (success) return resolve(dispatch({ data, type: PRODUCT.FETCH_PRODUCTS }))
      return resolve(dispatch({ data: [], type: PRODUCT.FETCH_PRODUCTS }))
    })
    .catch((e) => {
      return resolve(dispatch({ data: [], type: PRODUCT.FETCH_PRODUCTS }))
    })
})
export const createProduct = (product) => (dispatch) => new Promise((resolve) => {
  axios.post(`${URL}/products`, product)
    .then((res) => {
      return res.data || {}
    })
    .then(({ success, data }) => {
      if (success) return resolve(dispatch({ data, type: PRODUCT.CREATE_PRODUCT }))
      return resolve(dispatch({ data: {}, type: PRODUCT.CREATE_PRODUCT }))
    })
    .catch((e) => {
      return resolve(dispatch({ data: {}, type: PRODUCT.CREATE_PRODUCT }))
    })
})

export const getProduct = (product) => (dispatch) => new Promise((resolve) => {
  axios.patch(`${URL}/products/${product._id}`)
    .then((res) => res.data || {})
    .then(({ success, data }) => {
      if (success) return resolve(dispatch({ data, type: PRODUCT.GET_A_PRODUCT }))
      return resolve(dispatch({ data: {}, type: PRODUCT.GET_A_PRODUCT }))
    })
    .catch((e) => {
      return resolve(dispatch({ data: {}, type: PRODUCT.GET_A_PRODUCT }))
    })
})

export const updateProduct = (product) => (dispatch) => new Promise((resolve) => {
  axios.patch(`${URL}/products/${product._id}`)
    .then((res) => res.data || {})
    .then(({ success, data }) => {
      if (success) return resolve(dispatch({ data, type: PRODUCT.UPDATE_PRODUCT }))
      return resolve(dispatch({ data: {}, type: PRODUCT.UPDATE_PRODUCT }))
    })
    .catch((e) => {
      return resolve(dispatch({ data: {}, type: PRODUCT.UPDATE_PRODUCT }))
    })
})

export const deleteProduct = (id) => (dispatch) => new Promise((resolve) => {
  axios.delete(`${URL}/products/${id}`)
    .then((res) => res.data || {})
    .then(({ success, data }) => {
      if (success) return resolve(dispatch({ data, type: PRODUCT.DELETE_PRODUCT }))
      return resolve(dispatch({ data: {}, type: PRODUCT.DELETE_PRODUCT }))
    })
    .catch((e) => {
      return resolve(dispatch({ data: {}, type: PRODUCT.DELETE_PRODUCT }))
    })
})
