import '../css/Cart.css'

const Cart = ({ cart }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0)

  return (
    <div className='container__cart'>
      <h2 className="h2__cart">Cart</h2>
      {cart.length ? (
        <>
          <ul className="ul__cart">
            {cart.map((item, index) => (
              <li key={index} className="li__cart">
                {item.name} - ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <p>
            <strong className="price__cart">Total: ${total.toFixed(2)}</strong>
          </p>
        </>
      ) : (
        <p className="price__cart">Your cart is empty.</p>
      )}
    </div>
  )
}

export default Cart
