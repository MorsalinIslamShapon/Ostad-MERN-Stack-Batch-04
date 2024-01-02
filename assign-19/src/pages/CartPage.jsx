import React, { useState } from 'react';
import Button from '../componetnts/Button.JSx';

const CartPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: 'Product 1',
      image: 'https://pemonsbd.com/wp-content/uploads/2023/12/51wHHV8h1vL_1600x_94b584a6-274d-41df-a31f-b5162bb37d38_460x.webp',
      color: 'Red',
      quantity: 2,
      price: 19.99,
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'https://pemonsbd.com/wp-content/uploads/2023/12/81qtdDcrHlL._AC_SL1500_900x.webp',
      color: 'Blue',
      quantity: 1,
      price: 29.99,
    },
    {
        id: 3,
        name: 'Product 3',
        image: 'https://pemonsbd.com/wp-content/uploads/2023/12/51wHHV8h1vL_1600x_94b584a6-274d-41df-a31f-b5162bb37d38_460x.webp',
        color: 'Red',
        quantity: 2,
        price: 19.99,
      },
      {
        id: 4,
        name: 'Product 4',
        image: 'https://pemonsbd.com/wp-content/uploads/2023/12/81qtdDcrHlL._AC_SL1500_900x.webp',
        color: 'Blue',
        quantity: 1,
        price: 29.99,
      },
  ]);

  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.quantity * product.price, 0).toFixed(2);
  };

  return (
    <div className="cart-page container mx-auto my-10 p-4 sm:p-8 bg-orange-100 shadow-lg rounded-md">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">Your Shopping Cart</h2>
      <p className='text-blue-500'><Button /></p>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="cart-table w-full">
            <thead>
              <tr>
                <th className="text-left">Image</th>
                <th className="text-left">Name</th>
                <th className="text-left">Color</th>
                <th className="text-left">Quantity</th>
                <th className="text-left">Price</th>
                <th className="text-left">Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product.id} className="border-b">
                  <td>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded"
                    />
                  </td>
                  <td className="py-2 sm:py-4">{product.name}</td>
                  <td className="py-2 sm:py-4">{product.color}</td>
                  <td className="py-2 sm:py-4">{product.quantity}</td>
                  <td className="py-2 sm:py-4">${product.price.toFixed(2)}</td>
                  <td className="py-2 sm:py-4">${(product.quantity * product.price).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="5" className="text-right py-2 sm:py-4">
                  Total:
                </td>
                <td className="py-2 sm:py-4">${getTotalPrice()}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  );
};

export default CartPage;



/* 

*/
