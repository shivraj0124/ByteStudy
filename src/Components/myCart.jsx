import img1 from '../Images/notes-img.jpg'
import img2 from '../Images/notesImg.png'
import img3 from '../Images/questionPImg.png'
import img4 from '../Images/experimentsImg.png'
import { useNavigate } from 'react-router-dom'
import { useCart } from './CartContext'

export default function MyCart(){
    const { notesCart, questionCart, expCart } = useCart()
    const navigate=useNavigate()
    const NoteCart = () => {
        if(notesCart.length === 0){
            alert(`You haven't saved any note !`)
        }else{
            navigate('/MyCart/Notes')
        }
    }
    const QuestionCart = () => {
        if(questionCart.length === 0){
            alert(`You haven't saved any note !`)
        } else {
            navigate('/MyCart/Qp')
        }
    }
    const ExpCart = () => {
        if(expCart.length === 0){
            alert(`You haven't saved any note !`)
        } else {
            navigate('/MyCart/Experiments')
        }
    }
    
    return(
        <>
            <div className="w-100 mt-10 max-md:mt-12 px-[10%] lg:px-[14%] pb-6">
                <h1 className="text-2xl pb-16 underline underline-offset-2 decoration-amber-400 font-semibold text-center">
                    MyCart
                </h1>
                <div className='w-full mt-36 bg-white'>
                    <div className='max-w-[1240px] grid md:grid-cols-3 gap-8'>
                        <div className='w-full flex flex-col my-4 rounded-lg hover:scale-105 duration-300 cursor-pointer' onClick={NoteCart}>
                            <img className='w-[100%] h-[80%] mx-auto mt-[-3rem] bg-white' src={img2} alt="/" />
                            <h2 className='text-2xl text-center'>Notes</h2>
                        </div>

                        <div className='w-full flex flex-col my-4 rounded-lg hover:scale-105 duration-300 cursor-pointer' onClick={QuestionCart}>
                            <img className='w-[100%] h-[80%] mx-auto mt-[-3rem] bg-white' src={img3} alt="/" />
                            <h2 className='text-2xl text-center'>Question Papers</h2>
                        </div>

                        <div className='w-full flex flex-col my-4 rounded-lg hover:scale-105 duration-300 cursor-pointer' onClick={ExpCart}>
                            <img className='w-[100%] h-[80%] mx-auto mt-[-3rem] bg-white' src={img4} alt="/" />
                            <h2 className='text-2xl text-center'>Experiment</h2>
                        </div>
                    </div>
                </div>                           
            </div>
        </>
    )
}