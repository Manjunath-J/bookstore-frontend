import React, { useEffect, useState } from "react";
import "../styles/WishCard.scss";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { getBook, removeWishlist } from "../utils/HttpService";

const WishCard = (props) => {
  const { book } = props;
  const [bookData, setBookData] = useState([]);
  const [isData, setIsData] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getBook(`books/${book.book_id}`);
      setBookData(result.data.data);
    };
    fetchData();
  }, []);

  const handleRemoveWish = async () => {
    await removeWishlist(`wishlist/${book.book_id}`);
    setIsData(false);
  };

  return (
    <div>
      {isData ? (
        <div className="c-wish">
          <div className="w-p-div">
            <img src={bookData.bookImage} alt="book" className="w-img" />
          </div>
          <div className="w-b-div">
            <div className="w-b-details">
              <span className="w-b-name">{bookData.bookName}</span>
              <span className="w-b-auth">by {bookData.author}</span>
            </div>
            <div className="w-b-price">
              <span className="w-p">
                {" "}
                Rs.{bookData.discountPrice}{" "}
                <del className="w-del">Rs.{bookData.price}</del>
              </span>
            </div>
          </div>
          <div className="d-icon" onClick={handleRemoveWish}>
            <DeleteForeverIcon sx={{ color: "#9D9D9D" }}></DeleteForeverIcon>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default WishCard;
