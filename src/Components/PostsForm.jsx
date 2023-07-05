import PostHook from './StudyContext'
import img1 from '../Images/Signup.png'
export default function PostsForm() {
    const { posts } = PostHook()
    return (
        <>
            <div className="w-100 mt-16 justify-center px-5 lg:px-72 md:pb-52 max-md:pb-16" >
                <div className="w-[100%] flex md:flex-row max-md:flex-col p-3 bg-slate-300 rounded-md" >
                    <div className="w-[60%] max-md:w-[100%] max-md:pb-16 h-auto text-center text-2xl font-semibold p-10 bg-slate-200" >
                        <h1 className='font underline underline-offset-2' >Upload New {posts}</h1>
                        <div className='mt-10 text-xl font-normal' >
                            <div className='mt-5'>
                                <label for='departments' className=' w-[80%]'>Choose Department:</label>
                                <select id='departments' className='w-max px-2 focus:outline-none'>
                                    <option>IT</option>
                                </select>
                            </div>
                            <div className='mt-5 '>
                                <label for='semesters' className='w-[80%]'>Choose Semester:</label>
                                <select id='semesters' className='w-max px-2 focus:outline-none'>
                                    <option  >Semester I</option>
                                </select>
                            </div>
                            <div className='mt-5 '>
                                <label for='semesters' className='w-[80%]'>Choose Subject:</label>
                                <select id='semesters' className='w-max px-2 focus:outline-none'>
                                    <option></option>
                                </select>
                            </div>
                            
                            <input
                                type="text"
                                className="w-[80%] border-b-2 border-yellow-400 text-black focus:outline-none focus:border-yellow-400 w-100 bg-slate-200 focus:bg-white text-lg p-1 placeholder:text-slate-500 mt-3"
                                name="Name"
                                placeholder="Name" />
                            <input
                                type="url"
                                className="w-[80%] border-b-2 border-yellow-400 text-black focus:outline-none focus:border-yellow-400 w-100 bg-slate-200 focus:bg-white text-lg p-1 placeholder:text-slate-500 mt-3"
                                name="Link"
                                placeholder="Link" />
                            


                        </div>

                    </div>
                    <div className="w-[40%] max-md:w-[100%] h-auto bg-slate-200 "><img src={img1} className='h-96 w-100 max-md:w-[100%] rounded-md' /></div>
                </div>
            </div>
        </>
    )
}