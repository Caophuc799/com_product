
import Product from '../models/ProductModel'

class ProductController {
  getAll (projection, options) {
    return new Promise((resolve, reject) => {
      Product.find({}, projection, options)
        .then(products => {
          resolve(products)
        })
        .catch(error => reject(error))
    })
  }
  create (product) {
    return new Promise((resolve, reject) => {
      Product.create(product)
        .then(product => {
          resolve(product)
        })
        .catch(error => reject(error))
    })
  }

  delete (_id) {
    return new Promise((resolve, reject) => {
      Product.remove({ _id })
        .then(product => resolve(product))
        .catch(error => reject(error))
    })
  }

  update (_id, product) {
    return new Promise((resolve, reject) => {
      Product.findByIdAndUpdate({ _id }, { $set: product })
        .then(product => resolve(product))
        .catch(error => reject(error))
    })
  }
}

export default new ProductController()
