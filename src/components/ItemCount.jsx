import React, { useState } from 'react';

export const ItemCount = () => {
  const initialStock = 10; 
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleIncrement = () => {
    if (count < initialStock) {
      setCount(count + 1);
    }
  };

  const handleAddToCart = () => {
 alert(count)
  };

  return (
    <div className="itemCount"> 
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span> 
      <button onClick={handleIncrement}>+</button>
      
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};