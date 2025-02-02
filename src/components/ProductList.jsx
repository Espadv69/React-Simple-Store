import { products } from '../data/products'

const ProductList = ({ addToCart }) => {
  return (
    <div>
      <h2>Products</h2>
      <div className="container__product-list">
        {products.map((product) => (
          <div key={product.id} className="card__product-list">
            <img
              src={product.image}
              alt={product.name}
              className="image__product-list"
            />
            <h3 className="name__product-list">{product.name}</h3>
            <p className="price__product-list">{product.price}</p>
            <button
              className="addBtn__product-list"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList
