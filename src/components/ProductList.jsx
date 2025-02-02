import ProductCard from './ProductCard'
import { products } from '../data/products'

const ProductList = ({ addToCart }) => {
  return (
    <div>
      <h2>Products</h2>
      <div className="container__product-list">
        {products.map((product) => (
          <ProductCard product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
