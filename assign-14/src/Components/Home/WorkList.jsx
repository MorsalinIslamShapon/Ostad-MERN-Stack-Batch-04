import React from 'react';
import { RiMessage3Line } from 'react-icons/ri';
import { FaRegHeart } from 'react-icons/fa';
import { MdBusinessCenter } from 'react-icons/md';
import {BsArrowRight} from 'react-icons/bs'
import {GrGroup} from 'react-icons/gr'
import {BiLike} from 'react-icons/bi'
import {CiFaceSmile} from 'react-icons/ci'
import {PiWebhooksLogoDuotone} from 'react-icons/pi'


const WorkList = () => {
    const cardData = [
        {
            id: 1,
            icon: <RiMessage3Line />,
            heading: 'Grow Your Business',
            des: 'We help identify the best ways to improve your business',
        },
        
        {
            id: 2,
            icon: <FaRegHeart />,
            heading: 'Improve brand loyalty',
            des: 'We help identify the best ways to improve your business',
        },
        
        {
            id: 3,
            icon: <MdBusinessCenter />,
            heading: 'Improve Business Model',
            des: 'We help identify the best ways to improve your business',
        },
        
    ];

    const smallCardData = [
        {
          id: 1,
          name: 'Followers',
          count: 240452,
          icon: <GrGroup />,
        },
        {
          id: 2,
          name: 'Solved Problems',
          count: 6300,
          icon: <BiLike />,
        },
        {
          id: 3,
          name: 'Happy Customer',
          count: 25000,
          icon: <CiFaceSmile />,
        },
        {
          id: 4,
          name: 'Project',
          count: 360452,
          icon: <PiWebhooksLogoDuotone />,
        },
       
        
      ];

    return (
        <div className='container p-10'>
            <h4 className='uppercase font-semibold text-green-400'>Work List</h4>
            <h3 className='text-2xl font-bold'>
                We provide the Perfect Solution <br /> to your business growth 
                
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4 my-8">
                {cardData.map((data) => (
                    <div key={data.id} className="bg-white p-6 ">
                        <div className="text-2xl mb-4 bg-green-200 p-4 w-16 rounded">
                            <span role="img" aria-label="Icon 1">
                                {data.icon}
                            </span>
                        </div>
                        <h2 className="text-xl font-bold mb-2">{data.heading}</h2>
                        <p className="text-gray-600 mb-4">{data.des}</p>
                        <button className=" p-2 flex items-end gap-3">Learn More <BsArrowRight/></button>
                    </div>
                ))}
            </div>

            <div className="flex justify-around items-center mt-12  mb-6">
            {smallCardData.map((data) => (
                <div key={data.id} className="bg-white p-10 rounded-lg shadow-md text-center flex flex-col items-center ">
                    <div className="text-4xl mb-4 bg-green-200 p-5 rounded-md">{data.icon}</div>
                    <h2 className="text-xl font-bold mb-2">{data.count}</h2>
                    <p className="font-bold">{data.name}</p>
                </div>
            ))}
        </div>
        </div>
    );
};

export default WorkList;
