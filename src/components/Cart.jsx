const Cart = ({ cart }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0)

  return (
    <div>
      <h2>Cart</h2>
      {cart.length ? (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <p>
            <strong>Total: ${total.toFixed(2)}</strong>
          </p>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  )
}

export default Cart
