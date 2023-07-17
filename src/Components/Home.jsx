import img1 from '../Images/studymaterial.png'
import img2 from '../Images/notesImg.png'
import img3 from '../Images/questionPImg.png'
import img4 from '../Images/experimentsImg.png'
import { useNavigate } from "react-router-dom"
export default function Home() {

    const navigate = useNavigate();
    return (
        <>
            <div className="w-[100%]  h-full px-[10%] py-12 mr-0" >
                <div className="mt-10" >
                    <h2 className="text-4xl text-gray-600 font-bold"  >
                        Get your notes & question paper <br />and make your study easy
                    </h2>
                    <p className="mt-5" >
                        login to access the all study material
                    </p>
                    <button onClick={()=>navigate("/Departments")} className="border border-black px-4 py-2 mt-28 rounded-md hover:bg-yellow-300 hover:border-white " >
                        Get started
                    </button>
                    <img src={img1} className='w-[40%] h-80 absolute right-28 top-36 max-[516px]:top-64 max-[600px]:right-4 max-[600px]:w-[60%] max-[653px]:top-56 max-[653px]:right-16' />
                </div>
                {/* Services */}

                <div className='w-full mt-36 '>
                    <div className='max-w-[1240px]  grid md:grid-cols-3 gap-8'>
                        <div className='w-full  flex flex-col my-4 rounded-lg hover:scale-105 duration-300'>
                            <img className='w-[100%] h-[80%] mx-auto mt-[-3rem] bg-white' src={img2} alt="/" />
                            <h2 className='text-2xl text-center'>Notes</h2>

                        </div>

                        <div className='w-full flex flex-col my-4 rounded-lg hover:scale-105 duration-300'>
                            <img className='w-[100%] h-[80%] mx-auto mt-[-3rem] bg-white' src={img3} alt="/" />
                            <h2 className='text-2xl text-center'>Question Papers</h2>

                        </div>

                        <div className='w-full  flex flex-col my-4 rounded-lg hover:scale-105 duration-300'>
                            <img className='w-[100%] h-[80%] mx-auto mt-[-3rem] bg-white' src={img4} alt="/" />
                            <h2 className='text-2xl text-center'>Experiment</h2>
                        </div>
                    </div>
                </div>



               
            </div >
        </>
    )
}
