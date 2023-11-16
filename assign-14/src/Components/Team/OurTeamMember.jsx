import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const OurTeamMember = () => {
    const employeeData = [
        {
          id: 1,
          name: 'DoeDevon Lane',
          photoSrc: 'images/Devon Lane.png',
        },
        {
          id: 2,
          name: 'Danny Bailey',
          photoSrc: 'images/Danny Bailey.png',
        },
        {
          id: 3,
          name: 'Alex Lov',
          photoSrc: 'images/Alex Lov.png',
        },
      ];
    return (
        <div className='p-10 '>
            <h2 className='uppercase font-semibold text-green-300'>Our Team Member</h2>
            <h2 className='uppercase font-bold my-3'>Check our awesome team <br /> members</h2>

            <div className="grid grid-cols-3 gap-8 p-4">
                {employeeData.map((employee) => (
                    <div key={employee.id} className="bg-white  rounded-lg shadow-md relative overflow-hidden">
                        {/* Employee Photo */}
                        <img src={employee.photoSrc} alt={employee.name} className="w-full h-auto mb-4" />

                        {/* Social Menu */}
                        <div className="absolute bottom-20  flex justify-center items-center w-20">
                            <FaFacebook className="text-white mr-2 cursor-pointer" />
                            <FaTwitter className="text-white mr-2 cursor-pointer" />
                            <FaInstagram className="text-white cursor-pointer" />
                        </div>
                        <div className='p-3 w-full flex items-center justify-center font-bold'><h2>{employee.name}</h2></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurTeamMember;