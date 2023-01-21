// import useFetch from "./useFetch"

import { Link } from "react-router-dom"


const BlogList = ({blogs, title, handleDelete}) => {
    // const {data: blog}

    const blogsRet = blogs.map((blog)=>{
        return(
            <div className="blog-preview" key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    {<p>{blog.body.slice(0, 150)}...</p>}
                    <br />
                    <small>Author {blog.id}: {blog.author} </small>   
                </Link>    
            </div>    
        )
    })
    return ( 
        <>
            <div className="blog-list">
                <h2>{title}</h2>
                {blogsRet}

            </div>
        </>
     );
}
 
export default BlogList;