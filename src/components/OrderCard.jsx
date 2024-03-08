import React, { useEffect, useState } from "react";
import "../styles/OrderCard.scss";
import { getBook } from "../utils/HttpService";


const OrderCard = ({book}) => {

  const [bookData, setBookData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const result = await getBook(`books/${book.book_id}`);
      setBookData(result.data.data);
    };
    fetchData();
  }, []);

  return (
    <div className="o-card">
      <div className="o-p-div">
        <img src={bookData.bookImage} alt="book" className="o-img" />
      </div>
      <div className="o-b-div">
        <div className="o-b-details">
          <span className="o-b-name">{bookData.bookName}  &nbsp; &nbsp; &nbsp; <span style={{fontSize:"15px"}}>[{book.quantity}]</span> </span>
          <span className="o-b-auth">{bookData.author}</span>
        </div>
        <div className="o-b-price">
          <span className="o-p">
            Rs.{bookData.discountPrice} <del className="o-del">Rs.{bookData.price}</del>
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
