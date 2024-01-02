
import Button from './Button.JSx';
import {CategoryData } from '/public/Data/CategoryData'

const Categories = () => {

    
    return (
        
        <div className='container mx-auto p-5 '>
            <h2 className='font-bold text-3xl my-5'>Popular categories</h2>
            <p className='text-blue-500'><Button/></p>
            <div className='sm:flex-none md:flex justify-evenly'>
            {

                CategoryData.map((category, i)=>{
                    return(
                        <div className='sm:my-7' key={i}>
                            <img src={category.image}
                           
                            className='rounded-md  my-2 hover:animate-[tada_1s_ease-in-out]'/>
                            <h1 className='font-semibold text-xl my-2'>{category.name}</h1>
                        </div>
                    )
                })
                
            }
            
            </div>
        </div>
    );
};

export default Categories;

