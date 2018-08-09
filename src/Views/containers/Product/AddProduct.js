import React, { Component } from 'react'
import store from '../../Store'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { createProduct } from '../../../Actions/Product'

import './AddProduct.css'
class AddProduct extends Component {
  constructor (props) {
    super(props)
    this.state = {
      product: {
        name: '',
        price: ''
      },
      products: []
    }
    this.createNewProduct = this.createNewProduct.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.clearAll = this.clearAll.bind(this)
    this.getlist = this.getlist.bind(this)
  }

  getlist () {
    let state = store.getState()
    if (state.products) {
      this.setState({products: state.products.items})
    }
  }

  createNewProduct (data) {
    let { product } = this.state
    store.dispatch(createProduct(product))
    this.setState({product: {name: '', price: 0}}, () => this.getlist())
  }

  clearAll () {
    this.setState({ product: {} })
  }

  handleChange (name, value) {
    let { product } = this.state
    product[name] = value
    this.setState({product})
  }
  render () {
    let { product, products } = this.state
    return (
      <div className='container main-container'>
        <div className='row container-title add-product col-sm-12'>
            Product
        </div>
        <div className='row add-product'>
          <div className='col-sm-6'>
            <Link to='/' title={'link'} >Link </Link>
            {
              products.length > 0
                ? products.map((item, index) => {
                  return (
                    <div key={index}>
                      {item.name} {item.price}
                      <hr />
                    </div>
                  )
                }) : ''
            }
          </div>
          <div className='col-sm-6'>
            <div className='add-product__col'>
              <TextField
                id='name'
                label='Name'
                className='row add-product__input'
                value={product.name || ''}
                onChange={(e) => this.handleChange('name', e.target.value)}
                margin='normal'
                autoFocus
              />
              <TextField
                id='multiline-static'
                label='Description'
                multiline
                rows='6'
                defaultValue={product.description || ''}
                className='row add-product__input'
                onChange={(e) => this.handleChange('description', e.target.value)}
                margin='normal'
              />
              <TextField
                id='number'
                label='Price'
                value={product.price || ''}
                onChange={(e) => this.handleChange('price', e.target.value)}
                type='number'
                className='row add-product__input'
                margin='normal'
              />
              <TextField
                id='number'
                label='Count'
                value={product.count || ''}
                onChange={(e) => this.handleChange('count', e.target.value)}
                type='number'
                step={1}
                className='row add-product__input'
                margin='normal'
              />
              <div className='add-product__button-save'>
                <Button variant='contained' onClick={this.createNewProduct} color='primary'
                  className='main-button-ok add-product__button-create'>
                Create Product
                </Button>
                <Button variant='contained' onClick={this.clearAll}
                  className='main-button-ok add-product__button-create'>
                  Clear
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddProduct
