import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks = createAsyncThunk('book/fetchBook', async() => {
    const response = await axios.get("../../../public/Book.json")
    return response.data
})

export const bookSlice = createSlice({
    name: 'book',
    initialState: {
        isLoding:true,
        books: [],
        error:false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.pending, (state) => {
            state.isLoding = true
        })
        builder.addCase(fetchBooks.fulfilled, (state,action) => {
            state.isLoding = false,
            state.books = action.payload,
            state.error = false
        })
        builder.addCase(fetchBooks.rejected, (state,action) => {
            state.isLoding = false,
            state.error = action.payload
        })
    }
})
export default bookSlice.reducer;