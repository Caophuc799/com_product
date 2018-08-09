import { combineReducers } from 'redux'
// import LoginReducer from '../components/login/LoginReducer';
// // import HomeReducer from '../components/home/HomeReducer';
import ProductReducer from './ProductReducer'
// import event from './eventReducer'

export default combineReducers({
//   currentUser: LoginReducer,
  products: ProductReducer
})
