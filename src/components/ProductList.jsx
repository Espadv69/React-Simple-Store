import ProductCard from './ProductCard'
import { products } from '../data/products'

import '../css/ProductList.css'

const ProductList = ({ addToCart }) => {
  return (
    <div>
      <h2>Products</h2>
      <div className="container__product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
