import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Input from '../components/input/Input'
import Button from '../components/button/Button'
import { updateBooks } from '../states/bookSlice'
import { useDispatch } from 'react-redux'

const UpdateBook = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [id,setId] = useState(location.state.id)
  const [name,setName] = useState(location.state.name)
  const [author,setAuthor] = useState(location.state.author)

  const handleChangeSave = (e) => {
    dispatch(updateBooks({ id, name, author }));
    navigate("/viewbook")
  }
  return (
    <div className="w-1/2 h-screen flex justify-center items-center flex-col mx-auto">
      <Input
        styles="my-3 w-full px-5 h-14 rounded-xl"
        value={name}
        setValue={setName}
      />
      <Input
        styles="my-3 w-full px-5 h-14 rounded-xl"
        value={author}
        setValue={setAuthor}
      />
      <Button
        txt="Save"
        styles="bg-green-500 text-white px-5 py-3 rounded-xl w-full"
        action={handleChangeSave}
      />
    </div>
  );
}

export default UpdateBook