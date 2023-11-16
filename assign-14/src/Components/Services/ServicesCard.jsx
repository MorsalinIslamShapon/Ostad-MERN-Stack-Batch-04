import React from 'react';

const ServicesCard = () => {
    const cardData = [
        {
            name: 'Card 1',
            caption: `Build & Launch without Problems`,
            description: `Increase your team’s productivity and save time with a bot that answers and fields customer inquiries.`,
            img1: 'images/card1-1.png',
            img2: 'images/card1-2.png',
            img3: 'images/card1-3.png',
            img4: 'images/card1-4.png',
        },
        {
            name: 'Card 2',
            caption: `Build & Launch without Problems`,
            description: `Increase your team’s productivity and save time with a bot that answers and fields customer inquiries.`,
            img1: 'images/card2-1.png',
            img2: 'images/card2-2.png',
            img3: 'images/card2-3.png',
            img4: 'images/card2-4.png',
        },
        {
            name: 'Card 3',
            caption: `Build & Launch without Problems`,
            description: `Increase your team’s productivity and save time with a bot that answers and fields customer inquiries.`,
            img1: 'images/card3-1.png',
            img2: 'images/card3-2.png',
            img3: 'images/card3-3.png',
            img4: 'images/card3-4.png',
        },
        {
            name: 'Card 4',
            caption: `Build & Launch without Problems`,
            description: `Increase your team’s productivity and save time with a bot that answers and fields customer inquiries.`,
            img1: 'images/card4-1.png',
            img2: 'images/card4-2.png',
            img3: 'images/card4-3.png',
            img4: 'images/card4-4.png',
        },
    ];

    return (
        <div className='p-10 '>
             <h2 className='uppercase font-semibold text-green-300'>Our All Services</h2>
            <h2 className='uppercase font-bold my-3'>We provide BestWeb design<br /> services</h2>
            <div className="grid grid-cols-2 gap-8 p-20">
                {cardData.map((data, index) => (
                    <div key={data.name} className={`bg-white p-6 rounded-lg shadow-md ${index > 1 ? 'mt-8' : ''}`}>
                        <h2 className="text-xl font-bold mb-2">{data.caption}</h2>
                        <p className="text-sm text-gray-600 mb-4">{data.description}</p>
                        <div className="flex">
                            <img src={data.img1} alt={`Card Photo`} className="w-96 h-40" />
                            <img src={data.img2} alt={`Card Photo`} className="w-36 h-40" />
                        </div>
                        <div className="flex">
                            <img src={data.img3} alt={`Card Photo`} className="w-64 h-72" />
                            <img src={data.img4} alt={`Card Photo`} className="w-64 h-72" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesCard;
