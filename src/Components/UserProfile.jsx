import { FaUserCircle } from 'react-icons/fa'
import { BsFillBox2HeartFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useAuth } from "../Components/Authcontext";
export default function UserProfile() {
    const navigate =useNavigate()
    const [auth, setauth] = useAuth();
    return (
        <>
            <div className="w-[100%] h-full max-sm:px-[5%] px-[10%] py-12 mr-0  pb-72 flex justify-center bg-blue-100"  >
                
                <div className='max-md:w-[100%] flex flex-col w-max md:px-20   items-center h-96 text-2xl  pt-10 bg-white rounded-md'>
                    <div>
                        <FaUserCircle size={100} />
                        <li className='list-none font-bold uppercase'>{auth.user.username}</li>
                    </div>
                    
                    <div className='mt-3 font-normal text-xl text-gray-500'>
                        <hr className='text-gray-300 h-[0.5] bg-gray-300'  />
                       <ul className='mt-7'>
                            <li className='mt-2'>Name: <span >{auth.user.name}</span></li>
                            <li className='mt-2'>Email: <span >{auth.user.email}</span></li>
                        <div  className='flex mt-2 hover:text-yellow-600 cursor-pointer' onClick={()=> navigate('/myCart')}>
                        <li >My Cart </li>
                        <li className='mt-2 ml-2'>
                        <BsFillBox2HeartFill size={20} />
                        </li>
                        </div>
                       </ul>
                    </div>
                </div>
                
            </div>
        </>
    )
}