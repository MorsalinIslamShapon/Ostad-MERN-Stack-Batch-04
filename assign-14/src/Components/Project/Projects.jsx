import React from 'react';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
    const projectData = [
        {
          id: 1,
          name: 'Eco-Friendly Community App',
          imagePath: 'images/Project-1.png',
        },
        {
          id: 2,
          name: 'Smart Home Automation System',
          imagePath: 'images/Project-2.png',
        },
        {
          id: 3,
          name: 'Health and Wellness Platform',
          imagePath: 'images/Project-3.png',
        },
        {
          id: 4,
          name: 'Online Learning Management System',
          imagePath: 'images/Project-4.png',
        },
        {
          id: 5,
          name: 'Virtual Reality Gaming Experience',
          imagePath: 'images/Project-5.png',
        },
        {
          id: 6,
          name: 'E-commerce Marketplace Redesign',
          imagePath: 'images/Project-6.png',
        },
      ];
      
    return (
        <div className='p-10'>
             <h2 className='uppercase font-semibold text-green-300'>All PROJECT</h2>
            <h2 className='uppercase font-bold my-3'>Better Agency/SEO solution At<br />Your Fingertips</h2>
            <div className="grid grid-cols-2 gap-8 p-20">
                {
                    projectData.map((data, index) => (
                        <ProjectsCard key={index} data={data} />
                    ))
                }
            </div> 
        </div>
    );
};

export default Projects;
