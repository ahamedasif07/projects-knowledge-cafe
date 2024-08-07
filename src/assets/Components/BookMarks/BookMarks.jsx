import PropTypes from 'prop-types';
import BookMark from '../BookMark/BookMark';

const BookMarks = ({bookMarks,readingTime}) => {
    console.log(bookMarks,readingTime)
    return (
     <div>


          <div>
            <h3 className="Md:w-1/3 p-6 bg-slate-200 rounded-md mb-3 text-xl font-semibold">Spent time on read : {readingTime} min</h3>
            
          </div>
     
<div className="Md:w-1/3 p-6 bg-slate-200 rounded-md shadow-xl">
            <h2 className='font-bold text-3xl my-3'>Bookmarked Blogs : {bookMarks.length}</h2>
             <hr />

            {
                bookMarks.map(bookMark => <BookMark key={bookMark.id} bookMark={bookMark}></BookMark>)
            }
        </div>

     </div>
    );
};

BookMarks.propTypes={
    bookMarks :PropTypes.array.isRequired
}

export default BookMarks;