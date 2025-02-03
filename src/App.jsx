import { useState } from 'react'

import ProductList from './components/ProductList'
import Cart from './components/Cart'

const App = () => {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <div>
      <h1 className="h1-title">Simple React Store</h1>
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  )
}

export default App
