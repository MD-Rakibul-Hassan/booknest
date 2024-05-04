import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from '../../statemanagement/books/bookSlice';

const Home = () => {
  const {books} = useSelector((state) =>
    state.bookSlice
  );
  console.log(books)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks())
  },[])
  return (
    <div>
      {
        books.map(book => <div>
          {book.title}
        </div>)
      }
    </div>
  )
}

export default Home