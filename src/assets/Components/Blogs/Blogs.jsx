
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({ handleAddToBookMark,handelSetRedingTime}) => {
    
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

        console.log(blogs)
       
        
        
    },[])
    return (
        <div className="md:w-2/3 grid p-3 shadow-xl bg-slate-200 rounded-md md:mr-5">
           
            {
                blogs.map(blog => <Blog 
                    key={blog.id}
                     blog={blog}
                     handleAddToBookMark={ handleAddToBookMark}
                     handelSetRedingTime={handelSetRedingTime}
                     ></Blog>  )
            }
            
        </div>
    );
};

Blogs.propTypes ={
    handleAddToBookMark : PropTypes.func.isRequired,
    handelSetRedingTime : PropTypes.func.isRequired,
}


export default Blogs;