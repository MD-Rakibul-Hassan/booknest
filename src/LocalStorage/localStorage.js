import { useSelector } from "react-redux";
import { addToCard } from "../states/bookSlice";


const getLocalValue = (name) => {
    const x = useSelector(state => state.books.addToCard);
    console.log(x)
    const value = localStorage.getItem('book');

    const previusBooks = [];
    if (value) {
        previusBooks = JSON.parse(value);
    }
    previusBooks.push(name)
    localStorage.setItem('book',JSON.stringify(previusBooks))
}

export default getLocalValue;