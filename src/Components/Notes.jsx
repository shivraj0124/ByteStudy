import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import img1 from '../Images/notes-img.jpg'
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs'
import { Tooltip as ReactTooltip } from 'react-tooltip'
export default function Notes() {
    const [notes, setnotes] = useState([])

    const subid = useParams();

    const fetchnotes = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/v1/get-notes/${subid.id}`);
            setnotes(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    const [Save, setSave] = useState(false)
    const handleSaveBtn = (e) => {
        setSave(true)
        // const save = e.target
        // const saved = document.querySelector('#saved')
        // save.classList.add('hidden')
        // saved.classList.remove('hidden')
    }
    useEffect(() => {
        fetchnotes();
    }, []);

    const addToLocalStorage = (id, value) => {
        const grocery = { id, value };
        let items = getLocalStorage();
        items.push(grocery);
        localStorage.setItem("list", JSON.stringify(items));
    }
    return (
        <>
            <div className="w-100 mt-10 max-md:mt-12 px-[10%] lg:px-[14%] pb-6">
                <h1 className="text-2xl pb-16 underline underline-offset-2 decoration-amber-400 font-semibold text-center">
                    Notes
                </h1>
                <div className="grid md:grid-cols-3 max-md:grid-rows-1 max-md:gap-4 gap-8">
                    {notes.notes && Array.isArray(notes.notes) && notes.notes.map((notes) => (
                        <>
                            <div key={notes._id} className='w-[100%] h-100 bg-blue-white shadow-2xl shadow-slate-500 hover:bg-[#eaf5fc] p-3 text-2xl text-center rounded-lg  text-[#27374D] hover:text-[#27374D]  cursor-pointer font-semibold flex flex-col' >
                                <img src={img1} className='h-44 w-[100%] mt-0 rounded-md' alt="img" />
                                <div className='flex flex-col justify-start items-start mt-4'>
                                    <h3 className='ml-2'>{notes.name}</h3>
                                    <li className='flex justify-between mt-3 w-[100%] '>
                                        <Link to={notes.link} className='text-sm w-max bg-yellow-400 py-2 px-6 rounded-md' >Click Here</Link>
                                        {!Save ?
                                            <>
                                                <li id="save" data-tooltip-id="my-tooltip" data-tooltip-content="Save" className='list-none text-green-600 ' onClick={handleSaveBtn}>
                                                    <BsBookmark size={30} />
                                                </li>
                                            </>
                                            :
                                            <>
                                                <li id='saved' data-tooltip-id="my-tooltip2" data-tooltip-content="Saved" className='list-none  text-green-600 '>
                                                    <BsBookmarkFill size={30} />
                                                </li>
                                            </>
                                        }

                                    </li>

                                </div>
                            </div>
                        </>
                    ))}
                </div >
            </div>
            <ReactTooltip
                id="my-tooltip"
                place='bottom'
            />
            <ReactTooltip
                id="my-tooltip2"
                place='bottom'
            />
        </>
    );
}
