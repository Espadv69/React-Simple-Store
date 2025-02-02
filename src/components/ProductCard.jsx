const ProductCard = ({ product, addToCart }) => {
  return (
    <div key={product.id} className="card__product-card">
      <img
        src={product.image}
        alt={product.name}
        className="image__product-card"
      />
      <h3 className="name__product-card">{product.name}</h3>
      <p className="price__product-card">{product.price}</p>
      <button
        className="addBtn__product-card"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
