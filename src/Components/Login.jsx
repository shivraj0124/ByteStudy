import { Link } from 'react-router-dom'
import img1 from '../Images/Login.png'
export default function SignUp() {
    return (
        <>
            <div className="w-100 mt-16 justify-center px-5 lg:px-72 md:pb-52 max-md:pb-16" >
                <div className="w-[100%] flex md:flex-row max-md:flex-col-reverse p-3 bg-slate-300 rounded-md" >
                    <div className="w-[60%] max-md:w-[100%] max-md:pb-16 h-auto text-center text-2xl font-semibold p-2 bg-slate-200" >
                        <h1 className='font underline underline-offset-2 max-md:mt-5' >Login</h1>
                        <div className='mt-7 ' >
                           
                            <input
                                type="email"
                                className="w-[80%] border-b-2 border-yellow-400 text-black focus:outline-none focus:border-yellow-400 w-100 bg-slate-200 focus:bg-white text-lg p-1 placeholder:text-slate-500 mt-3 md:mt-8"
                                name="email"
                                placeholder="Email" />
                            
                            <input
                                type="password"
                                className="w-[80%] border-b-2 border-yellow-400 text-black focus:outline-none focus:border-yellow-400 w-100 bg-slate-200 focus:bg-white text-lg p-1 placeholder:text-slate-500 mt-3 md:mt-10"
                                name="fullname"
                                placeholder="Password" />
                            

                            <p className='text-sm font-normal mt-16 max-md:mt-16' >Don't have an account ?<Link className='text-blue-600' to='/SignUp '>Create Account</Link></p>
                        </div>

                    </div>
                    <div className="w-[40%] max-md:w-[100%] h-auto bg-slate-200 "><img src={img1} className='h-96 w-100 max-md:w-[100%] max-md:h-52 rounded-md' /></div>
                </div>
            </div>

        </>
    )
}