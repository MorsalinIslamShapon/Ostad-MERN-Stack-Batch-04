import React from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
    const companyLogos = [
        { name: "Google", url: "https://www.google.com/" },
        { name: "Trello", url: "https://trello.com/" },
        { name: "Monday.com", url: "https://monday.com/" },
        { name: "Notion", url: "https://www.notion.so/" },
        { name: "Slack", url: "https://slack.com/intl/en-gb/" },
      ];
      
      
    return (
        <div className='bg-green-200 pt-5 pb-5 mt-5'>
            <div className="flex flex-col lg:flex-row justify-around   rounded-md overflow-hidden mx-4 my-8 lg:mx-auto lg:w-3/4 xl:w-full p-15 ">
                {/* Left side with text */}
                <div className="w-96 mx-10 flex flex-col justify-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
                        Increase Your Customers Loyalty and Satisfaction
                    </h2>
                    <p className="text-base lg:text-lg text-gray-600">
                        We help businesses like yours earn more customers, stand out from competitors, make more money.
                    </p>
                    <button className="btn btn-success mt-4">
                        Get Started
                    </button>
                </div>

                {/* Right side with photo gallery */}
                <div className="w-1/2 flex justify-center items-center  ">
                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 p-4">
                        <div className="relative overflow-hidden aspect-ratio-16/9 xl:flex ">
                            <img
                                src="images/home1.png"
                                alt="Gallery 1"
                                className="object-cover h-64 w-96 mr-3"
                            />
                            <img
                                src="images/home2.png"
                                alt="Gallery 2"
                                className="object-cover h-64 w-48"
                            />
                        </div>

                        <div className="relative overflow-hidden aspect-ratio-1/1 xl:flex">
                            <img
                                src="images/home3.png"
                                alt="Gallery 3"
                                className="object-cover w-64 h-44 mr-3"

                            />
                            <img
                                src="images/home4.png"
                                alt="Gallery 4"
                                className="object-cover w-96 h-44"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-green-100 h-28 ">
            <div className="flex  justify-evenly p-10">
                        {
                            companyLogos.map((item) => { return (<Link to={item.url} className='font-bold text-lg text-red-500' key={item.name}  target="_blank">{item.name}</Link>) })
                        }

                    </div>
            </div>
        </div>
    );
};

export default Card;