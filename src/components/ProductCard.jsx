const ProductCard = ({ product, addToCart }) => {
  return (
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
  )
}

export default ProductCard
