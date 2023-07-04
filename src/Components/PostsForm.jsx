import PostHook from './StudyContext'
export default function PostsForm(){
    const {posts}=PostHook()
    return(
        <>
        <h1>{posts}</h1>
        </>
    )
}