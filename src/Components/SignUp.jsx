import { Link, useNavigate } from 'react-router-dom'
import img1 from '../Images/Signup.png'
import { useState } from 'react'
import axios from "axios"
import { toast } from "react-toastify"
export default function SignUp() {


    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [cpass, setcpass] = useState("")
    const navigate = useNavigate();

    const handlesubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post("http://localhost:5000/api/v3/register", {
                name: name,
                email: email,
                username: username,
                password: password,
                cpassword: cpass
            });
            if (data.success) {
                toast.success(" Registration succesfully ")
                navigate("/login")
            }
            else {
                toast.error("user already exist")
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error("An error occurred:", error.message);
            }
        }

    }
    return (
        <>

            <div className="w-100 pt-16 bg-gray-200 justify-center px-5 lg:px-72 md:pb-52 max-md:pb-16" >
                <div className="w-[100%] flex md:flex-row max-md:flex-col-reverse p-3 bg-white shadow-xl rounded-md" >
                    <div className="w-[60%] max-md:w-[100%] max-md:pb-8 h-auto text-center text-2xl font-semibold p-2 " >
                        <h1 className='font underline underline-offset-2 max-md:mt-5' >Sign Up</h1>
                        <div className='mt-5 ' >
                            <form onSubmit={handlesubmit}>
                                <input
                                    type="text"
                                    className="w-[80%] border-b-2 border-yellow-200 text-black focus:outline-none focus:border-yellow-400 w-100  focus:bg-white text-lg p-1 placeholder:text-slate-500  mt-3"
                                    name="fullname"
                                    value={name}
                                    onChange={(e) => setname(e.target.value)}
                                    placeholder="Full Name" />
                                <input
                                    type="email"
                                    className="w-[80%] border-b-2 border-yellow-200 text-black focus:outline-none focus:border-yellow-400 w-100  focus:bg-white text-lg p-1 placeholder:text-slate-500 mt-3"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setemail(e.target.value)}
                                    placeholder="Email" />
                                <input
                                    type="text"
                                    className="w-[80%] border-b-2 border-yellow-200 text-black focus:outline-none focus:border-yellow-400 w-100  focus:bg-white text-lg p-1 placeholder:text-slate-500 mt-3"
                                    name="Username"
                                    value={username}
                                    onChange={(e) => setusername(e.target.value)}
                                    placeholder="Username" />
                                <input
                                    type="password"
                                    className="w-[80%] border-b-2 border-yellow-200 text-black focus:outline-none focus:border-yellow-400 w-100  focus:bg-white text-lg p-1 placeholder:text-slate-500 mt-3"
                                    name="fullname"
                                    value={password}
                                    onChange={(e) => setpassword(e.target.value)}
                                    placeholder="Password" />
                                <input
                                    type="password"
                                    className="w-[80%] border-b-2 border-yellow-200 text-black focus:outline-none focus:border-yellow-400 w-100  focus:bg-white text-lg p-1 placeholder:text-slate-500 mt-3"
                                    name="confirmPassword"
                                    value={cpass}
                                    onChange={(e) => setcpass(e.target.value)}
                                    placeholder="Confirm Password" />
                                <button className='w-[80%] mt-8 p-2 text-lg bg-yellow-400 hover:bg-yellow-300 rounded-lg'>SignUp</button>

                            </form>

                            <p className='text-sm font-normal mt-6 max-md:mt-8' >Already have an account ? <Link className='text-blue-600' to='/Login '>Login here</Link></p>
                        </div>

                    </div>
                    <div className="w-[40%] max-md:w-[100%] h-auto "><img src={img1} className='h-[100%] w-100 max-md:w-[100%] max-md:h-52 rounded-md' /></div>
                </div>
            </div>
        </>
    )
}