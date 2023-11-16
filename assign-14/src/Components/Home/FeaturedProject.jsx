import React from 'react';

const FeaturedProject = () => {

    const largeCardData = [
        {
            id: 1,
            imageSrc: 'images/Mask.png',
            appDesignDate: 'App Design - 2023-11-15',
            redesignHeading: 'App Redesign',
        },
    ];

    const smallCardData = [
        {
            id: 2,
            imageSrc: 'images/card 1.png',
            appDesignDate: 'App Design - 2023-11-15',
            redesignHeading: 'Redesign Channel Website Landing Page',
        },
        {
            id: 3,
            imageSrc: 'images/card 2.png',
            appDesignDate: 'App Design - 2023-11-15',
            redesignHeading: 'Redesign Channel Website Landing Page',
        },
        {
            id: 4,
            imageSrc: 'images/card 3.png',
            appDesignDate: 'App Design - 2023-11-16',
            redesignHeading: 'Redesign Channel Website Landing Page',
        },
        {
            id: 5,
            imageSrc: 'images/card 4.png',
            appDesignDate: 'App Design - 2023-11-16',
            redesignHeading: 'Redesign Channel Website Landing Page',
        },
        
    ];
    return (
        <div className=' p-10 bg-green-200'>
            <h4 className='uppercase font-semibold text-green-400'>Featured Project</h4>
            <h3 className='text-2xl font-bold'>
                We provide the Perfect Solution <br /> to your business growth

            </h3>
            <div className="flex justify-center gap-8 p-4 h-1/3 my-12 bg-green-200">
                {/* Large Card */}
                <div className="lg:col-span-2  w-1/3">
                    <img src={largeCardData[0].imageSrc} alt="Large Card" className="w-full h-4/6 mb-4" />
                    <p className="text-sm text-gray-500 mb-2">{largeCardData[0].appDesignDate}</p>
                    <h2 className="text-xl font-bold">{largeCardData[0].redesignHeading}</h2>
                </div>

                {/* Small Cards */}
                <div className="grid grid-cols-2 ">
                    {smallCardData.map((data) => (
                        <div key={data.id} className=" p-4 w-52">
                            <img src={data.imageSrc} alt={`Small Card ${data.id}`} className="w-72 h-44 mb-2" />
                            <p className="text-xs text-gray-500  mb-2">{data.appDesignDate}</p>
                            <h3 className="text-xs font-bold mb-2">{data.redesignHeading}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedProject;