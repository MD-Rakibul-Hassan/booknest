import React, { useState } from 'react'
import Input from '../components/input/Input'
import Button from '../components/button/Button'
import { useDispatch, useSelector } from 'react-redux';
import { addBooks } from '../states/bookSlice';
import { useNavigate } from 'react-router-dom';
const AddBook = () => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const numberOfBooks = useSelector(state => state.books.books.length);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: numberOfBooks + 1, name, author };
    dispatch(addBooks(book));
    setName('');
    setAuthor('');
    navigate('/viewbook')
  }
  return (
    <>
      <form
        className="w-1/2 flex justify-center items-center flex-col  h-screen mx-auto"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name </label>
        <Input
          styles="w-full h-14 rounded-xl px-5 my-3"
          setValue={setName}
          value={name}
        />
        <label htmlFor="author">Author </label>
        <Input
          styles="w-full h-14 rounded-xl px-5 my-3"
          setValue={setAuthor}
          value={author}
        />
        <Button txt="Add Book" styles="bg-lime-500 px-5 py-3 rounded-xl w-full text-white my-3" />
      </form>
    </>
  );
}

export default AddBook