// /* global fetch */
import axios from './httpService'
import {
  // FETCH_PRODUCTS,
  CREATE_PRODUCT
  // GET_A_PRODUCT,
  // DELETE_PRODUCT,
  // UPDATE_PRODUCT
} from './constants'

export const createProduct = (product) => (dispatch) => new Promise((resolve) => {
  axios.post('http://localhost:5000/products', { product })
    .then((res) => res.data || {})
    .then(({ success, data }) => {
      if (success) return resolve(dispatch({ data, type: CREATE_PRODUCT }))
      return resolve(dispatch({ data: [], type: CREATE_PRODUCT }))
    })
    .catch((e) => {
      return resolve(dispatch({ data: [], type: CREATE_PRODUCT }))
    })
})

// class ProductsMethod {
//   // createProduct (data) {
//   //   console.log('create product')
//   //   console.log(data)
//   //   let partnerProfile = httpService().post('/products', data)
//   //   console.log(partnerProfile.data)
//   //   return () => {
//   //     try {
//   //       console.log('temp')
//   //       console.log(partnerProfile)
//   //       return partnerProfile.data
//   //     } catch (error) {
//   //       console.log(error)
//   //       return error
//   //     }
//   //   }
//   // }

//   seedProduct () {
//     var data = {
//       name: 'Xoài cát hoà lộc',
//       count: 10
//     }
//     createProduct(data)
//   }
// }

// export default new ProductsMethod()
