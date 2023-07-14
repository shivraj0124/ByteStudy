import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import img1 from '../Images/notes-img.jpg'
import { BsBookmark } from 'react-icons/bs'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { useCart } from "./CartContext";
import {toast} from 'react-toastify'
export default function Experiments() {
    const [Exps, setExps] = useState([])
    const { expCart, setExpCart }=useCart()
    const subid = useParams();

    const fetchExps = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/v1/get-Exp/${subid.id}`);
            setExps(response.data);
            console.log(response.data);
            //momadd
            
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchExps();
    }, []);
    const handleSaveBtn = (e) => {

        toast.success('Experiment saved successfully !', {
            autoClose: 2000,
        })
        const data = e.currentTarget.parentElement.parentElement.parentElement
        const id = data.children[0].id
        const name = data.children[0].innerHTML
        const link = data.children[1].id
        const updateCart = { id, name, link }
        setExpCart([...expCart, updateCart]);
        localStorage.setItem("expCart", JSON.stringify([...expCart]));
    }

    return (
        <>
            <div className="w-100 mt-10 max-md:mt-12 px-[10%] lg:px-[14%] pb-6">
                <h1 className="text-2xl text-center pb-16 underline underline-offset-2 decoration-amber-400 font-semibold">
                    Select Experiments
                </h1>

                <div className="grid md:grid-cols-3 max-md:grid-rows-1 max-md:gap-4 gap-8">
                    {Exps.Exp && Array.isArray(Exps.Exp) && Exps.Exp.map((Exps) => (
                        <>
                            <div key={Exps._id} className='w-[100%] h-100 bg-blue-white shadow-2xl shadow-slate-500 hover:bg-[#eaf5fc] p-3 text-2xl text-center rounded-lg  text-[#27374D] hover:text-[#27374D]  cursor-pointer font-semibold flex flex-col' >
                                <img src={img1} className='h-44 w-[100%] mt-0 rounded-md' alt="img" />
                                <div className='flex flex-col justify-start items-start mt-4'>
                                    <h3 id={Exps._id} className='ml-2'>{Exps.name}</h3>
                                    <li id={Exps.link} className='flex justify-between mt-3 w-[100%] '>
                                        <Link to={Exps.link} className='text-sm w-max bg-yellow-400 py-2 px-6 rounded-md' >Click Here</Link>
                                        <li data-tooltip-id="my-tooltip" data-tooltip-content="Save " className='list-none  text-green-600 '>
                                            <BsBookmark  onClick={handleSaveBtn} size={30} />
                                        </li>
                                    </li>

                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
            <ReactTooltip
                id="my-tooltip"
                place='bottom'
            />
        </>
    );
}
