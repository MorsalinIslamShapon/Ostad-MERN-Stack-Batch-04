import React from 'react';
import ProductCompo from '../componetnts/ProductCompo';
import ProductData from '/public/Data/ProductData'
import Button from '../componetnts/Button.JSx';
const ProductPage = () => {
    console.log(ProductData);
    return (
        <div>
            <div className='flex  items-center justify-evenly'>
                <h1 className='font-bold text-center text-3xl my-6'>New Products </h1>
                <p className='text-blue-500'>
                    <Button />
                </p>
            </div>

            <div className='p-4'>
                <ProductCompo key={0} ProductData={ProductData} />
            </div>
        </div>
    );
};

export default ProductPage;