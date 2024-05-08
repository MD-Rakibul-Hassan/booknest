import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "../states/bookSlice";


const store = configureStore({
    reducer: {
        books: bookSlice
    }
});

export default store;