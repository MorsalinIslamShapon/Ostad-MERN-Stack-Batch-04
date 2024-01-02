// FAQPage.jsx
import React from 'react';
import Button from '../componetnts/Button.JSx';

const FAQPage = () => {
    return (
        <div className="container mx-auto my-8">
            <h1 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h1>

            <p className='text-blue-500 my-2'><Button/></p>

            <div className="grid grid-cols-2 gap-4 justify-items-center ">
                {/* Question 1 */}
                <div className="bg-yellow-100 w-fit p-4 rounded">
                    <h2 className="text-xl font-medium mb-2">What is Lorem Ipsum?</h2>
                    <p className="text-gray-700">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>

                {/* Question 2 */}
                <div className="bg-yellow-100 w-fit p-4 rounded">
                    <h2 className="text-xl font-medium mb-2">How do I get started?</h2>
                    <p className="text-gray-700">
                        Getting started is easy! Just follow the steps outlined in our documentation.
                    </p>
                </div>

                {/* Question 2 */}
                <div className="bg-yellow-100 w-fit p-4 rounded">
                    <h2 className="text-xl font-medium mb-2">How do I get started?</h2>
                    <p className="text-gray-700">
                        Getting started is easy! Just follow the steps outlined in our documentation.
                    </p>
                </div>{/* Question 2 */}
                <div className="bg-yellow-100 w-fit p-4 rounded">
                    <h2 className="text-xl font-medium mb-2">How do I get started?</h2>
                    <p className="text-gray-700">
                        Getting started is easy! Just follow the steps outlined in our documentation.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default FAQPage;
