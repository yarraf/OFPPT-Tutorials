
import React from 'react'
import { addToCart } from '../actions'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'
import { getVisibleProducts } from '../reducers/products'
import { connect } from 'react-redux'


const ProductsContainer = ({ products,addToCart}) => (
    <ProductsList title="Products">
      { products ? products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToCartClicked={() => addToCart(product.id)}
        />
      ))
    :
    <span>aucun produit trouvés</span>}
    </ProductsList>
  )


  const mapStateToProps = state => ({
    products : getVisibleProducts(state.products)
  })

  export default connect(mapStateToProps, {addToCart}) (ProductsContainer);