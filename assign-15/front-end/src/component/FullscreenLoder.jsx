import React from 'react';
import Loder from '../assets/image/loder.svg'
const FullscreenLoder = () => {
    return (
        <div className='ProcessingDiv'>
            <div className='center-screen'>
                <div className='loader-size'>
                    <img src={Loder}/>
                </div>
            </div>

        </div>
    );
};

export default FullscreenLoder;