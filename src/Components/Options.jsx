import img2 from '../Images/notesImg.png'
import img3 from '../Images/questionPImg.png'
import img4 from '../Images/experimentsImg.png'
import { useNavigate } from 'react-router-dom'
export default function Options(){
    const navigate =useNavigate()
    return(
        <>
            <div className="w-[100%]  h-full px-[10%] py-12 mr-0" >
            <div className='w-full mt-36 bg-white '>
                <div className='max-w-[1240px]  grid md:grid-cols-3 gap-8'>
                    <div className='w-full  flex flex-col my-4 rounded-lg hover:scale-105 duration-300 cursor-pointer' onClick={()=> navigate('/Notes')} >
                        <img className='w-[100%] h-[80%] mx-auto mt-[-3rem] bg-white' src={img2} alt="/" />
                        <h2 className='text-2xl text-center'>Notes</h2>

                    </div>

                        <div className='w-full flex flex-col my-4 rounded-lg hover:scale-105 duration-300 cursor-pointer' onClick={() => navigate('/QuestionsPapers')}>
                        <img className='w-[100%] h-[80%] mx-auto mt-[-3rem] bg-white' src={img3} alt="/" />
                        <h2 className='text-2xl text-center'>Question Papers</h2>

                    </div>

                        <div className='w-full  flex flex-col my-4 rounded-lg hover:scale-105 duration-300 cursor-pointer' onClick={() => navigate('/Experiments')}>
                        <img className='w-[100%] h-[80%] mx-auto mt-[-3rem] bg-white' src={img4} alt="/" />
                        <h2 className='text-2xl text-center'>Experiment</h2>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}