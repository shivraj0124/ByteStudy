import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Departments() {
    const [departments, setDepartments] = useState([]);
    const navigate = useNavigate();

    const fetchDepartments = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/v2/all-dep");
            setDepartments(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchDepartments();
    }, []);

    return (
        <>
            <div className="w-100 mt-10 max-md:mt-12 px-[10%] lg:px-[14%] pb-6">
                <h1 className="text-2xl text-center pb-16 underline underline-offset-2 decoration-amber-400 font-semibold">
                    Select Department
                </h1>

                <div className="w-100 grid md:grid-cols-3 max-md:grid-rows-1 gap-8  lg:pb-52">
                    {departments.map((department) => (
                        <div
                            onClick={() => navigate(`/Semesters/${department._id}`)}
                            key={department._id}
                            className="w-30 h-100 bg-blue-100 p-5 py-20 text-2xl text-center rounded-lg hover:bg-amber-300 text-[#27374D] hover:text-[#27374D]  cursor-pointer font-semibold "
                        >
                            {department.name}

                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
