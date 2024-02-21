import React from "react";
import "../styles/BookCard.scss";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

const BookCard = ({ book, handleBookNavigate }) => {
  let quantity;
  if (book.quantity > 0) quantity = book.quantity;
  else quantity = 0;
  return (
    <div>
      <div className="book-card" onClick={()=>handleBookNavigate(book)}>
        <div className={`up-div ${quantity === 0 ? 'out' : ''}`}>
          <div className="photo-div">
            <img src={book.bookImage} className="book-image" alt="book" />
          </div>
        </div>
        <div className={`down-div ${quantity === 0 ? 'out-of-stock' : ''}`}>
          <div className="b-content">
            <h1 className="b-name">{book.bookName}</h1>
            <span className="b-author">by {book.author}</span>
          </div>
          <div className="b-rating">
            <span className="rating">
              4.5{" "}
              <StarOutlinedIcon
                sx={{ color: "#FFFFFF", fontSize: "medium" }}
              ></StarOutlinedIcon>
            </span>
            <span style={{ color: "#878787", fontSize: "11px" }}>({quantity})</span>
          </div>
          <div className="price-div">
            <h1 className="price">
              Rs.{book.discountPrice} <del className="del">Rs.{book.price}</del>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
