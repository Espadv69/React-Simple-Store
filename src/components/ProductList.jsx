import { useState } from 'react'
import { products } from '../data/products'

const ProductList = () => {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart([...cart, product])
  }
}

export default ProductList
