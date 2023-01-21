import { useHistory ,useParams } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetails = () => {
    const {id}= useParams()
    const history = useHistory()


    const {data:blog, isPending, error}= useFetch(`http://localhost:8000/blogs/${id}`)

    const handleBlogDelete=()=>{
        fetch(`http://localhost:8000/blogs/${blog.id}`, {
            method: 'DELETE'
        })
        .then((res)=>{
            history.push('/')
            return res.json()})
        .then((data)=>{console.log(data)})
    }
    return ( 
        <div>
            {isPending && <div>Loading...</div> }
            <article>
                <h2>{blog.title}</h2>
                <p>{blog.body}</p>
                <br />
                <small>Author {blog.id}: {blog.author}</small>
                <br /> <br />
                <button onClick={handleBlogDelete}>Delete Blog</button>
            </article>
        </div>
     );
}
 
export default BlogDetails;