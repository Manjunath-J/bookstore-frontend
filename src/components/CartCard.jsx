import React, { useEffect, useState } from "react";
import "../styles/CartCard.scss";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { getBook, removeCart, updateCart } from "../utils/HttpService";

const CartCard = (props) => {
  const { book } = props;
  const [isData, setIsData] = useState(true)
  const [Quantity, setQuantity] = useState(book.quantity);
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getBook(`books/${book.book_id}`);
      setBookData(result.data.data);
    };
    fetchData();
  }, []);

  const increaseQuantity = () => {
    if (bookData.quantity > Quantity) {
      setQuantity(Quantity + 1);
      handleCart();
    }
  };

  const decreaseQuantity = () => {
    if (Quantity > 1) {
      setQuantity(Quantity - 1);
    } else setIsData(false);
    handleRemove();
  };

  const handleCart = async () => {
    await updateCart(`/cart/${book.book_id}`);
  };

  const handleRemove = async () => {
    await removeCart(`/cart/${book.book_id}`);
  };

  const handleDelete = async()=>{
    let quantity=Quantity
    for(let i=1;i<=quantity;i++){
      await handleRemove();
    }
    setIsData(false)
  }

  return (
    <>
      {isData ? (
        <>
          <div className="c-card">
            <div className="c-p-div">
              <img src={book.bookImage} alt="book" className="c-img" />
            </div>
            <div className="c-b-div">
              <div className="c-b-details">
                <span className="c-b-name">{book.bookName}</span>
                <span className="c-b-auth">by {bookData.author}</span>
              </div>
              <div className="c-b-price">
                <span className="c-p">
                  Rs.{book.price}{" "}
                  <del className="c-del">Rs.{bookData.price}</del>
                </span>
              </div>
              <div className="c-b-quantity">
                <div className="as-button">
                  <IconButton onClick={decreaseQuantity}>
                    <RemoveIcon className="minus" />
                  </IconButton>
                  <span className="q-t">{Quantity}</span>
                  <IconButton onClick={increaseQuantity}>
                    <AddIcon className="plus" />
                  </IconButton>
                </div>
                <div>
                  <button className="r-button" onClick={handleDelete}>Remove</button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default CartCard;
