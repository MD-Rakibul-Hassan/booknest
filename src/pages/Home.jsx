import React, { useEffect, useState } from "react";
// import getLocalValue from "../LocalStorage/localStorage";
import { addToCard } from "../states/bookSlice";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
    // const x = useSelector(state => console.log(state.books.addToCard))
    const [books, setBooks] = useState([]);
    const [loading, setLoadign] = useState(true);
    const dispatch = useDispatch();
    const handleAddToCard = (title) => {
        dispatch(addToCard(title))
    }
  useEffect(() => {
    fetch("https://api.itbook.store/1.0/search/mongodb")
      .then((res) => res.json())
          .then((data) => setBooks(data.books));
      setLoadign(false);
  }, []);
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-5 lg:px-10 my-10 ">
        {loading ? (
          <div className="flex h-screen   w-full">
            <span className="loading loading-bars w-20"></span>
          </div>
        ) : (
          books.map((book) => {
            const { title, image, price, isbn13 } = book;
            return (
              <div className="card bg-base-100 shadow-xl" key={isbn13}>
                <figure className="px-10 pt-10">
                  <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body  ">
                  <h2 className="card-title">{title}</h2>
                  <p>Price : {price}</p>
                  <div className="card-actions">
                            <button
                                className="btn btn-primary"
                                onClick={() => handleAddToCard(title)}
                            >
                                Add To Card
                            </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    );
};

export default Home;
