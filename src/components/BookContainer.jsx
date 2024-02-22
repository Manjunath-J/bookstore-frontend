import React, { useEffect, useState } from "react";
import { getAllBooks } from "../utils/HttpService";
import BookCard from "./BookCard";
import { Pagination, Select, MenuItem } from "@mui/material";
import "../styles/BookContainer.scss";
import { useNavigate } from 'react-router-dom';


const BookContainer = () => {
  const [bookList, setBookList] = useState([]); 
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSort, setSelectedSort] = useState("Relevance");
  const booksPerPage = 8;
  const navigate = useNavigate()

    const handleBookNavigate = (book)=>{
        navigate(`/book/${book._id}`)
    }

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllBooks("books");
      setBookList(res.data.data);
    };
    fetchData();
  }, []);

  // Logic for pagination
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;

  // Change page
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  // Handle sort selection change
  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
    setCurrentPage(1); // Reset current page when changing filter
  };
  
 

  let sortedList;
  if (selectedSort === "Price: low to high") {
    sortedList=[...bookList].sort((a, b) => a.discountPrice - b.discountPrice);
  } else if (selectedSort === "Price: high to low") {
    sortedList=[...bookList].sort((a, b) => b.discountPrice - a.discountPrice);
  }
  else{
    sortedList=[...bookList]
  }

  return (
    <>
      <div className="cnt">
        <div className="filter-div">
          <h1 className="title">Books</h1>
          <Select
            className="filter"
            value={selectedSort}
            onChange={handleSortChange}
            size="small"
            displayEmpty
          >
            <MenuItem value="Relevance" >Sort by Relevance</MenuItem>
            <MenuItem value="Price: low to high">Price: low to high</MenuItem>
            <MenuItem value="Price: high to low">Price: high to low</MenuItem>
          </Select>
        </div>
        <div className="books-div">
          {sortedList.slice(indexOfFirstBook, indexOfLastBook).map((book) => (
            <BookCard key={book._id} book={book} handleBookNavigate={handleBookNavigate}/>
          ))}
        </div>
        <Pagination
          count={Math.ceil(bookList.length / booksPerPage)}
          page={currentPage}
          onChange={handleChangePage}
          variant="outlined"
          shape="rounded"
          color="primary"
          size="large"
          className="pagination"
        />
      </div>
    </>
  );
};

export default BookContainer;
