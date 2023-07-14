import img1 from '../Images/notes-img.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from './CartContext'
import { MdDeleteOutline } from 'react-icons/md'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { toast } from 'react-toastify'
export default function ExpCart() {
    const { expCart, setExpCart } = useCart()
    const navigate = useNavigate()
    let cart = JSON.parse(localStorage.getItem('expCart'))
    const handleDelete = (nId) => {
        let myCart = [...expCart];
        let index = myCart.findIndex((item) => item._id === nId);
        myCart.splice(index, 1)
        console.log(index)
        setExpCart(myCart);
        localStorage.setItem("expCart", JSON.stringify(myCart));
        toast.error("Note removed", {
            autoClose: 2000,
        })
    }
    if (expCart.length === 0) {
        setTimeout(() => {
            navigate('/')
        }, 3000)
    }

    return (
        <>
            <div className="w-100 mt-10 max-md:mt-12 px-[10%] lg:px-[14%] pb-6">
                <h1 className="text-2xl pb-16 underline underline-offset-2 decoration-amber-400 font-semibold text-center">
                    Experiments
                </h1>
                <div className="grid md:grid-cols-3 max-md:grid-rows-1 max-md:gap-4 gap-8">
                    {expCart?.map((item, id) => (
                        <div key={id} className='w-[100%] h-100 bg-blue-100 p-3 text-2xl text-center rounded-lg  text-[#27374D] hover:text-[#27374D]  cursor-pointer font-semibold flex flex-col' >
                            <img src={img1} className='h-44 w-[100%] mt-0 rounded-md' alt="img" />
                            <div className='flex flex-col justify-start items-start mt-4'>
                                <h3 className='ml-2'>{item.name}</h3>
                                <li className='flex justify-between mt-3 w-[100%]'>
                                    <Link to={item.link} className='text-sm bg-yellow-400 py-2 px-6 rounded-md'>Click Here</Link>

                                    <li id="save" data-tooltip-id="my-tooltip" data-tooltip-content="Remove" className='list-none text-red-600 ' >
                                        <MdDeleteOutline onClick={() => handleDelete(item.id)} size={30} />
                                    </li>
                                </li>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
            <ReactTooltip
                id="my-tooltip"
                place='bottom'
            />
        </>
    )
}