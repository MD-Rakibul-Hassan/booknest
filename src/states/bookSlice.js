import { createSlice } from "@reduxjs/toolkit";
import { app,auth } from '../firebase/firebase.init';
import {GoogleAuthProvider} from 'firebase/auth'

const initalBooks = {
    books: [
        {
            id: 1,
            name: 'Love.js',
            author: 'Rakibul hassan'
        },
        {
            id: 2,
            name: 'Redux learning',
            author: 'Hassan Shehab'
        }
    ],
    addToCard: [],
};

export const bookSlice = createSlice({
    name: 'books',
    initialState: initalBooks,
    reducers: {
        showBooks: (state) => state,
        addBooks: (state, action) => {
            state.books.push(action.payload);
        },
        deleteBooks: (state, action) => {
            state.books = state.books.filter(book => book.id !== action.payload);
        },
        updateBooks: (state, action) => {
            const { id, name, author } = action.payload;
            const editedBook = state.books.filter(book => book.id === id);
            if (editedBook) {
                editedBook[0].name = name;
                editedBook[0].author = author;
            }
        },
        addToCard: (state, action) => {
            state.addToCard.push(action.payload);
            localStorage.setItem("book",JSON.stringify(state.addToCard))
        }
        
    }
});

export const { showBooks,addBooks,deleteBooks,updateBooks,addToCard } = bookSlice.actions;
export default bookSlice.reducer;