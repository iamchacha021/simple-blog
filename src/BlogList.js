// import useFetch from "./useFetch"


const BlogList = ({blogs, title, handleDelete}) => {
    // const {data: blog}

    const blogsRet = blogs.map((blog)=>{

        const handleBlogDelete=()=>{
            fetch(`http://localhost:8000/blogs/${blog.id}`, {
                method: 'DELETE'
            })
            .then((res)=>{return res.json()})
            .then((data)=>{console.log(data)})
        }

        return(
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>{blog.body} </p>
                <small>Author {blog.id}: {blog.author} </small>
                <button onClick={handleBlogDelete}>Delete Blog</button>
                <br />
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