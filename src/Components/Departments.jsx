import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Components/Authcontext";
import { toast } from "react-toastify"
import { Puff } from 'react-loader-spinner'

export default function Departments() {
  const [departments, setDepartments] = useState([]);
  const navigate = useNavigate();
  const [auth, setauth] = useAuth();
  const [loader, setLoader] = useState(false)
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
    setLoader(true)
    setTimeout(()=>{
    if (auth.user) {
      fetchDepartments();
      setLoader(false)
    }
    else {
      toast.warn('Login First !',{
        autoClose:2000,
      });
      navigate('/login');
    }
  },3000)

}, [auth.user]);

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
          Select Department
        </h1>

        <div className="w-100 grid md:grid-cols-3 max-md:grid-rows-1 gap-8  lg:pb-52">
          {departments.map((department) => (
            <div
              onClick={() => navigate(`/Semesters/${department._id}`)}
              key={department._id}
              className="w-30 h-100 bg-[#a9e4ff] shadow-xl 0 p-5 py-20 text-2xl text-center rounded-lg hover:bg-amber-300 text-[#27374D] hover:text-[#27374D]  cursor-pointer font-semibold "
            >
              {department.name}

            </div>
          ))}
        </div>
        </>
}
      </div>
    </>
  );
}
