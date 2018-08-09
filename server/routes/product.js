
import express from 'express'
import ProductController from '../controller/ProductConroller'
var productRoutes = express.Router()

// get all products in the db

productRoutes.get('/', (req, res, next) => {
  ProductController.getAll()
    .then(products => res.json({ success: true, data: products }))
    .catch(() => res.json({ isError: true, data: [] }))
})

// create a product item
productRoutes.post('/', (req, res, next) => {
  ProductController.create({
    name: req.body.name || '',
    createAt: Date.now(),
    count: req.body.count || 1,
    isSold: req.body.isSold || false
  })
    .then(product => res.json({ success: true, data: product }))
    .catch((e) => res.json({ isError: true, data: [] }))
})

// delete a product item

productRoutes.delete('/:id', (req, res, next) => {
  ProductController.delete(req.params.id, req.body)
    .then(product => res.json({ success: true, data: product }))
    .catch(() => res.json({ isError: true, data: [] }))
})

// perform update on product item

productRoutes.put('/:id', (req, res, next) => {
  ProductController.update(req.params.id, req.body)
    .then(product => res.json({ success: true, data: product }))
    .catch(() => res.json({ isError: true, data: [] }))
})

export default productRoutes
