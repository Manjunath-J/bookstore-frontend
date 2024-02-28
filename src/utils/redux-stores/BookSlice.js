import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: 'book',
  initialState: {
    bookData: [],
    searchData: []
  },
  reducers: {
    setBookData: (state, action) => {
      state.bookData = action.payload;
      state.searchData = action.payload;
    },
    filterBookData: (state, action) => {
      const searchKeywords = action.payload;

      state.searchData = state.bookData.filter(book => {
        return (
          book.bookName.toLowerCase().includes(searchKeywords.toLowerCase())
        );
      });
    },
  }
});

export const { setBookData, filterBookData ,sortByPrice} = bookSlice.actions;
export default bookSlice.reducer;