import { PRODUCT } from '../Constants/constants'
import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

export const INITIAL_STATE = Immutable({
  data: []
})

const onFetchProducts = (state, { data }) => {
  return ({ ...state, data })
}

const onCreateProduct = (state, { data }) => {
  var newState = Object.assign({}, state)
  if (data && data._id) {
    newState.data.push(data)
  }
  return newState
}

const onDeleteProduct = (state, { data }) => {
  var newState = Object.assign({}, state)
  console.log(data)
  if (data && data._id) {
    newState.data.filter((item) => item._id !== data._id)
  }
  return newState
}

const onGetAProduct = (state, { data }) => {
  var newState = Object.assign({}, state)
  if (data && data._id) {
    newState.data.find((item) => item._id === data._id)
  }
  return newState
}

const onUpdateProduct = (state, { data }) => {
  var newState = Object.assign({}, state)
  if (data && data._id) {
    newState.data.filter((item) => item._id !== data._id)
    newState.data.push(data)
  }
  return newState
}

const ACTION_HANDLERS = {
  [PRODUCT.FETCH_PRODUCTS]: onFetchProducts,
  [PRODUCT.CREATE_PRODUCT]: onCreateProduct,
  [PRODUCT.DELETE_PRODUCT]: onDeleteProduct,
  [PRODUCT.GET_A_PRODUCT]: onGetAProduct,
  [PRODUCT.UPDATE_PRODUCT]: onUpdateProduct
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
