import img1 from '../Images/notes-img.jpg'
import { BiDownload } from 'react-icons/bi'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { useNavigate } from 'react-router-dom'
export default function MyCart(){
    const navigate =useNavigate()
    return(
        <>
            <div className="w-100 mt-10 max-md:mt-12 px-[10%] lg:px-[14%] pb-6">
                <h1 className="text-2xl pb-16 underline underline-offset-2 decoration-amber-400 font-semibold text-center">
                    MyCart
                </h1>
                <div className="grid md:grid-cols-4 max-md:grid-rows-1 max-md:gap-4 gap-8">
                    <div className='w-[100%] h-100 bg-blue-100 p-3 text-2xl text-center rounded-lg  text-[#27374D] hover:text-[#27374D]  cursor-pointer font-semibold flex flex-col' >
                        <img src={img1} className='h-44 w-[100%] mt-0 rounded-md' alt="img" />
                        <div className='flex flex-col justify-start items-start mt-4'>
                            <h3 className='ml-2'>Adv Java</h3>
                            <li className='flex justify-between mt-3 w-[100%]'>
                                <button className='text-sm bg-yellow-400 py-2 px-6 rounded-md' onClick={()=> navigate('/Notess')}>Click Here</button>
                                <li data-tooltip-id="my-tooltip" data-tooltip-content="Download" className='list-none  text-green-600 '>
                            <BiDownload  size={30}/>
                                </li>
                            </li>

                        </div>
                    </div>
                    
                    
                    
                </div>
            </div>
            <ReactTooltip
                id="my-tooltip"
                place='bottom'
            />
        </>
    )
}