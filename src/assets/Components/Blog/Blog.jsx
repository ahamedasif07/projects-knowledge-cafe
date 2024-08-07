import PropTypes from 'prop-types'
import { FiBookmark } from "react-icons/fi";

const Blog = ({blog, handleAddToBookMark,handelSetRedingTime}) => {
    // console.log(blog)
    const {cover, title, author_img, author, post_date ,reading_time,hashtags}=blog;
    return (
        <div>
            <img className='rounded' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex items-center justify-between'>
            <div className='flex p-6'>
                <img className='w-12 ' src={author_img} alt="" srcset="" />
                <div className='mx-4'>
                    <h2 className='font-extrabold text-xl'>{author}</h2>
                    <h3 className='font-extralight'>{post_date }</h3>
                </div>
            </div>
            <div className='flex'>
             <h4>{reading_time} min read</h4>
             <button onClick={()=>handleAddToBookMark(blog) } className='mx-2 text-red-500'><FiBookmark /></button>
            </div>

            </div>
            <h2 className='font-bold text-4xl pb-1' >{title}</h2>
           <p>
           {
              hashtags.map((hash,idx)=> <span className='p-1 ' key={idx}><a href="">#{hash}</a></span>)
            }
           </p>
           <button onClick={()=>handelSetRedingTime(blog)} className='text-purple-700 font-semibold p-2 text-lg hover:underline'>Mark as read</button>
            
        </div>
    );
};



Blog.propTypes = {
    blog : PropTypes.object.isRequired,
    handleAddToBookMark : PropTypes.func.isRequired,
    handelSetRedingTime : PropTypes.func.isRequired
}

export default Blog;