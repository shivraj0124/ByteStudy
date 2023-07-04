import React,{createContext,useContext,useState} from 'react'

const StudyContext =createContext();

export default function StProvider({ children }){
    const [posts,setPosts]=useState(" ")
    const value={
        posts,
        setPosts
    }
    return <StudyContext.Provider value={value}>
        {children}
    </StudyContext.Provider>
}
const PostHook =()=>{
    const context = useContext(StudyContext);
    return context
}