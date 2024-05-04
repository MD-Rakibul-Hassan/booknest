import { configureStore } from "@reduxjs/toolkit";
import bookSlice from './../statemanagement/books/bookSlice';


const store = configureStore(
    {
        reducer: {
           bookSlice
       }
    }
)
export default store