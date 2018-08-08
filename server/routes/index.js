import product from './product'
import users from './users'

/* GET home page. */
export default (app, passport) => {
  app.use('/products', product)
  app.use('/users', users)
}
