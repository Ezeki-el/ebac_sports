import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Carrodecompras/cartSlice'

interface ProductProps {
  product: {
    name: string
    description: string
  }
}

function Product({ product }: ProductProps) {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  )
}

export default Product
