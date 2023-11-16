import React from 'react';

const ProjectsCard = ({data}) => {
    const {imagePath , name} = data
    return (
        <div className='shadow-md rounded-md flex flex-col items-center w-3/4 '>
            <img src={imagePath} alt="Image" className='w-full h-full'  />
            <p className='p-5 font-bold'>{name}</p>
        </div>
    );
};

export default ProjectsCard;