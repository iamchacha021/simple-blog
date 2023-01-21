import { useState, useEffect } from "react"
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    let [age, setAge]= useState(0)
    const [name, setName]= useState('mario');
    const {data, isPending, error} = useFetch('http://localhost:8000/blogs')
    

   const handleClick = (ev)=>{
       setAge(age += 2)
    }


    return (  
        <>
            <div className="home">
                <h2>Homepage</h2>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>{name} is {age} years old. </p>
                <button onClick={handleClick} >Click me</button>
                {isPending && <strong>The page is loading...</strong> }
                <BlogList blogs={data} title="All the Blogs" /*handleDelete={handleDelete}*/ />
                <br /> <br />
                <BlogList blogs={data.filter((blog)=>blog.author ==="chacha")}  title="chacha's blogs" /*handleDelete={handleDelete}*/ />
                <br /> <br /> <br />

                <button onClick={()=>setName('luigi')}>Change Name</button>
                <p>{name}</p>
                
            </div>        
        </>
    );
}
 
export default Home;