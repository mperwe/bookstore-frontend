import React, { useState, useEffect } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage when the component mounts
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (id, operation) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id) {
        if (operation === 'increase') item.quantity += 1;
        if (operation === 'decrease' && item.quantity > 1) item.quantity -= 1;
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    alert('Proceeding to checkout');
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center mt-4">Your cart is empty.</p>
      ) : (
        <div className="mt-8 space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg">
              <img src={item.image} alt={item.title} className="w-20 h-28 object-cover rounded-md" />
              <div className="flex-1 ml-4">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-600">{item.author}</p>
                <p className="text-md font-semibold text-yellow-500">${item.price}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button className="bg-gray-200 px-4 py-2 rounded-full" onClick={() => handleQuantityChange(item.id, 'decrease')}>-</button>
                <span>{item.quantity}</span>
                <button className="bg-gray-200 px-4 py-2 rounded-full" onClick={() => handleQuantityChange(item.id, 'increase')}>+</button>
              </div>
              <button className="text-red-500" onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-10 p-6 bg-yellow-50 rounded-lg shadow-lg flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Total Price</h2>
          <p className="text-xl font-bold text-yellow-600">${calculateTotal()}</p>
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-8 flex justify-center">
          <button onClick={handleCheckout} className="bg-yellow-500 text-white py-3 px-6 rounded-lg text-xl hover:bg-yellow-600 transition-all duration-300">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
