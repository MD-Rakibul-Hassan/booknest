import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBooks } from "../states/bookSlice";
import {Link} from 'react-router-dom'
const ViewBook = () => {
  const books = useSelector(state => state.books.books);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteBooks(id))
  }
  return (
    <div className="overflow-x-auto h-screen container mx-auto flex justify-center items-center flex-col">
      <table className="border-2">
        {/* head */}
        <thead className="">
          <tr>
            <th className=" m-5">Id</th>
            <th className=" m-5">Name</th>
            <th className="px-10 border-4 m-5">Author</th>
          </tr>
        </thead>
        <tbody>
          {
            books.map(book => {
              const { id, name, author } = book;
              return (
                <tr key={id}>
                  <td className="px-10 border-4">{id}</td>
                  <td className="px-10 border-4">{name}</td>
                  <td className="px-10 border-4">{author}</td>
                  <td className="flex gap-4 px-10 border-4">
                    <Link to='/update' state={{id,author,name}}>
                      <button className="bg-lime-500 px-4 py-2 rounded-xl  text-white">
                        Edit
                      </button>
                    </Link>
                    <button
                      className="bg-orange-500 px-4 py-2 rounded-xl text-white"
                      onClick={() => handleDelete(id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          }
         
        </tbody>
      </table>
    </div>
  );
};

export default ViewBook;
