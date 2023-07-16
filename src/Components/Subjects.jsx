import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Puff } from "react-loader-spinner";
export default function Departments() {
    const [sub, setsub] = useState([]);
    const navigate = useNavigate();
    const semid = useParams();
    const [loader,setLoader]=useState(false)
    const fetchsub = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/v1/get-sub/${semid.id}`);
            setsub(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setLoader(true)
        setTimeout(()=>{
            fetchsub();
            setLoader(false)
        },3000)
    }, []);

    return (
        <>
            <div className="w-100 py-16 px-[15%] mt-0 bg-gray-200 lg:px-[14%] pb-6">
                {loader ?
                    <div className='flex flex-row justify-center mt-10 items-center '>
                        <Puff
                            height="80"
                            width="80"
                            radius={1}
                            color="#F1C93B"
                            ariaLabel="puff-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                    </div>
                    :
                    <>
                <h1 className="text-2xl text-center pb-16 underline underline-offset-2 decoration-amber-400 font-semibold">
                    Select Subject
                </h1>

                <div className="w-100 grid md:grid-cols-3 max-md:grid-rows-1 gap-10  lg:pb-52 md:pb-40">
                    {sub.subject && Array.isArray(sub.subject) && sub.subject.map((subject) => (
                        <div
                            onClick={() => navigate(`/Options/${subject._id}`)}
                            key={subject._id}
                            className="w-30 h-100 bg-[#a9e4ff] shadow-xl  p-5 py-20 text-2xl text-center rounded-lg hover:bg-amber-300 text-[#27374D] hover:text-[#27374D]  cursor-pointer font-semibold"
                        >
                            {subject.name}<br />
                        </div>
                    ))}
                </div>
                </>
}
            </div>
            
        </>
    );
}
