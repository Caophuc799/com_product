import { PRODUCT } from '../Constants/constants'
import { createReducer } from 'reduxsauce'

function productApp (state, action) {
  console.log(state)
  switch (action.type) {
    case PRODUCT.CREATE_PRODUCT:
      var newState = Object.assign({}, state)
      newState.products.items.push(action.data)
      return newState

    case PRODUCT.UPDATE_PRODUCT:
      var newState = Object.assign({}, state)
      newState = newState.products.items.map((item) => {
        if (item.id === action.id) {
          return action.data
        }
        return item
      })
      return newState

    case PRODUCT.DELETE_PRODUCT:
      var newState = Object.assign({}, state)
      newState.products.items.filter((item) => item.id !== action.id)
      return newState

    case PRODUCT.GET_A_PRODUCT:
      var newState = Object.assign({}, state)
      newState.products.items.find(({id}) => id === action.id)
      return newState

    default:
      return state
  }
}

export default productApp
