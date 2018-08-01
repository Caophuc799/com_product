import product from './product'

/* GET home page. */
export default (app, passport) => {
  console.log('(/products, product)')
  app.use('/products', product)
}
