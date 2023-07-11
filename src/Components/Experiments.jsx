import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Experiments() {
    const [notes, setnotes] = useState([])

    const subid = useParams();

    const fetchnotes = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/v1/get-Exp/${subid.id}`);
            setnotes(response.data);
            console.log(response.data);
            //momadd
            
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchnotes();
    }, []);

    return (
        <>
            <div className="w-100 mt-10 max-md:mt-12 px-[10%] lg:px-[14%] pb-6">
                <h1 className="text-2xl text-center pb-16 underline underline-offset-2 decoration-amber-400 font-semibold">
                    Select Experiments
                </h1>

                <div className="w-100 grid md:grid-cols-3 max-md:grid-rows-1 gap-8  lg:pb-52">
                    {notes.Exp && Array.isArray(notes.Exp) && notes.Exp.map((notes) => (
                        <div

                            key={notes._id}
                            className="w-30 h-100 bg-blue-100 p-5 py-20 text-2xl text-center rounded-lg hover:bg-amber-300 text-[#27374D] hover:text-[#27374D]  cursor-pointer font-semibold"
                        >
                            {notes.name}<br /> sem -{notes.link}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
