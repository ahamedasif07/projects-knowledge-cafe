
import './App.css'
import Blogs from './assets/Components/Blogs/Blogs'
import BookMarks from './assets/Components/BookMarks/BookMarks'
import Header from './assets/Components/Header/Header'

function App() {


  return (
    <>
      
      <div className='max-w-screen-xl mx-auto'>
      <Header></Header>

      <div className='flex'>
      <Blogs></Blogs>
      <BookMarks></BookMarks>
      </div>
      </div>
  
    </>
  )
}

export default App
