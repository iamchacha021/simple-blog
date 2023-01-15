import { useState } from "react";
const Create = () => {
    const [title, setTitle]= useState('')
    const [body, setBody]= useState('')
    const [author, setAuthor]= useState('yoshi')
    

    const handleSubmit = (ev)=>{
        // ev.preventDefault()
        const blog = {title, body, author}
        
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        })
        .then((res)=>{return res.json()})
        .then((data)=>{console.log(data)})
    }
    return ( 
        <div className="create">
            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(ev)=> setTitle(ev.target.value)}
                 />

                 <label >Blog Body</label>
                 <textarea 
                    required
                    value={body}
                    onChange={(ev)=> setBody(ev.target.value)}
                 ></textarea>

                 <label >Blog Author</label>
                 <select 
                    value={author}
                    onChange={(ev)=> setAuthor(ev.target.value)}
                 >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                 </select>
                 <button>Add Blog</button>
            </form>
            <p>{title}</p>
            <p>{body} </p>
            <p>{author} </p>
        </div>
     );
}
 
export default Create;