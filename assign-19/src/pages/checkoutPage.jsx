import React from 'react';
import Button from '../componetnts/Button.JSx';

const CheckoutPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-orange-100 p-8 rounded-md shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-semibold mb-6">Checkout</h2>

        {/* Customer Information Form */}
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-2">
              Full Name
            </label>
            <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-md" />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
              Email Address
            </label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-md" />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-600 text-sm font-medium mb-2">
              Address
            </label>
            <textarea id="address" name="address" className="w-full px-4 py-2 border rounded-md"></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="payment" className="block text-gray-600 text-sm font-medium mb-2">
              Payment Details
            </label>
            <input type="text" id="payment" name="payment" className="w-full px-4 py-2 border rounded-md" />
          </div>

          {/* Order Summary */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
            {/* Display order summary details here */}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Place Order
          </button>
        </form>
        <p className='text-blue-500 mt-2'><Button/></p>
      </div>
    </div>
  );
};

export default CheckoutPage;
