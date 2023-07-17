import { FaUserCircle } from 'react-icons/fa'
import { BsFillBox2HeartFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useAuth } from "../Components/Authcontext";
import { useCart } from './CartContext';
import { toast } from 'react-toastify';
export default function UserProfile() {
    const navigate = useNavigate()
    const [auth, setauth] = useAuth();
    const { notesCart, questionCart, expCart } = useCart()

    const handleMyCart = () => {
        if (notesCart.length === 0 && questionCart.length === 0 && expCart.length === 0) {
            // alert('No saved Items');
            toast.warn('No saved Items',{
                autoClose:2000,
            })

        } else {
            navigate('/MyCart')
        }
    }
    const handleLogOut = () => {
        setauth({
            user: null,
            token: "",
        })
        localStorage.removeItem("auth");
        navigate('/')
    }
    return (
        <>
            <div className="w-[100%] h-full max-sm:px-[5%] px-[10%] py-12 mr-0  pb-72 flex justify-center bg-gray-200"  >

                <div className='max-md:w-[100%] flex flex-col w-max md:px-20   items-center h-max pb-5 text-2xl  pt-10 bg-white shadow-xl rounded-md'>
                    <div className='flex flex-col justify-center items-center' >
                        <FaUserCircle size={100} />
                        <li className='list-none font-bold uppercase'>{auth.user.username}</li>
                    </div>

                    <div className='mt-3 font-normal text-xl text-gray-800 px-1'>
                        <hr className='text-gray-400 h-[1px] bg-gray-300' />
                        <ul className='mt-7'>
                            <li className='mt-2'><b>Name:</b> <span className='text-gray-800' >{auth.user.name}</span></li>
                            <li className='mt-2'><b>Email:</b> <span >{auth.user.email}</span></li>
                            <div className='flex mt-2 text-yellow-600 hover:text-yellow-700 cursor-pointer' onClick={handleMyCart}>
                                <li className='text-bold ' >Saved items</li>
                                <li className='mt-2 ml-2'>
                                    <BsFillBox2HeartFill size={20} />
                                </li>
                            </div>
                        </ul>
                        <li className='flex flex-col justify-center items-center'>
                            <hr className='text-gray-300 h-[2px] mt-6 w-[80%] bg-gray-500' />
                        
                        <button onClick={handleLogOut} className="w-max mt-8 px-6 h-10 text-black rounded-md bg-yellow-300 hover:bg-[#ebeb5a] cursor-pointer">
                            Logout
                        </button>
                        </li>
                    </div>
                    

                </div>

            </div>
        </>
    )
}