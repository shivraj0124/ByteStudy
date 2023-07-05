import React,{createContext,useContext,useState} from 'react'

const StudyContext =createContext();

export const  Stprovider=({ children })=>{
    const [posts,setPosts]=useState(" ")
    const setPostsP = (fnd) => {
        setPosts(fnd)
    }
    const value={
        posts,
        setPostsP
    }
    return <StudyContext.Provider value={value}>
        {children}
    </StudyContext.Provider>
}
const PostHook =()=>{
    const context = useContext(StudyContext);
    if (context == undefined) {
        throw new Error('hook is not working');
    }
    return context
    
}

export default PostHook