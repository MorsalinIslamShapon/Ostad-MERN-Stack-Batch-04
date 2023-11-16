import Subscribe from '../Components/Home/Subscribe';
import OurTeamMember from '../Components/Team/OurTeamMember';
import NavBar from './NavBar';


const TeamPage = () => {
    return (
        <NavBar>
            <div className=' p-16 '>
                <h1 className='text-xl font-bold'>Team</h1>
                <p className='font-semibold my-4'>{'Home  > '} <span className='text-green-400'>Team</span> </p>
            </div>
            <OurTeamMember/>
            <Subscribe/>
        </NavBar>
    );
};

export default TeamPage;