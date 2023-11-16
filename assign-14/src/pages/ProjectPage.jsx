import Subscribe from '../Components/Home/Subscribe';
import Projects from '../Components/Project/Projects';
import NavBar from './NavBar';

const ProjectPage = () => {
    return (
        <NavBar>
             <div className=' p-16 bg-base-200 mt-2 '>
                <h1 className='text-xl font-bold'>All Project</h1>
                <p className='font-semibold my-4'>{'Home  > '} <span className='text-green-400'>All Project</span> </p>
            </div>
            <Projects/>
            <Subscribe/>
        </NavBar>
    );
};

export default ProjectPage;