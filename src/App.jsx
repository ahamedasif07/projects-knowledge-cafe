
import { useState } from 'react'
import './App.css'
import Blogs from './assets/Components/Blogs/Blogs'
import BookMarks from './assets/Components/BookMarks/BookMarks'
import Header from './assets/Components/Header/Header'

function App() {

  const [bookMarks, setBookMarks]=useState([]);
  const [readingTime,setReadingTime]=useState(0);


  const handleAddToBookMark =(blog)=>{
    const newBookMark = [...bookMarks,blog]
    setBookMarks(newBookMark)

  }

  const handelSetRedingTime =(blog)=>{
    const {reading_time}=blog
    const newReadingTime= (readingTime) + (reading_time);
    setReadingTime(newReadingTime)
    
  }
  console.log(readingTime)


  return (
    <>
      
      <div className='max-w-screen-xl mx-auto'>
      <Header></Header>
      

      <div className='md:flex pb-10'>
      <Blogs 
       handleAddToBookMark={ handleAddToBookMark}
       handelSetRedingTime={handelSetRedingTime}
       ></Blogs>

      <BookMarks
       bookMarks={bookMarks}
       readingTime={readingTime}
       ></BookMarks>
      </div>
      </div>
  
    </>
  )
}

export default App
