import React, { useEffect, useState } from "react";
import "../styles/BookInfo.scss";
import { useNavigate, useParams } from "react-router-dom";
import { getBook, removeCart,getCart, updateCart } from "../utils/HttpService";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const BookInfo = () => {
  const book = useParams();
  const [books, setBook] = useState([]);
  const [Quantity, setQuantity] = useState(1);
  const [isAdd, setIsAdd] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getBook(`books/${book._id}`);
      setBook(result.data.data);

      const res = await getCart("/cart");
      let cartData = res.data?.items;
      const data = cartData?.filter(
        (ele) => ele.book_id === result.data?.data._id
      );
      if (data) if (data[0]) {
        setIsAdd(true);
        setQuantity(data[0].quantity);
      }
    };
    fetchData();
  }, []);

  let quantity;
  if (books.quantity > 0) quantity = books.quantity;
  else quantity = 0;

  const increaseQuantity = () => {
    if (books.quantity > Quantity) {
      setQuantity(Quantity + 1);
      handleCart();
    }
  };

  const decreaseQuantity = () => {
    if (Quantity > 1) {
      setQuantity(Quantity - 1);
    } else setIsAdd(false);
    handleRemove();
  };

  const handleCart = async () => {
    await updateCart(`/cart/${books._id}`);
    if (!isAdd) setIsAdd(true);
  };

  const handleRemove = async () => {
    await removeCart(`/cart/${books._id}`);
  };

  return (
    <>
      <div className="book-info">
        <div className="left-div">
          <div className="b-div">
            <img src={books.bookImage} alt="book" className="b-photo" />
          </div>
          <div className="a-div">
            {quantity > 0 ? (
              <div className="add-cart-div">
                {isAdd ? (
                  <div className="as-button">
                    <IconButton onClick={decreaseQuantity}>
                      <RemoveIcon className="minus" />
                    </IconButton>
                    <span className="q-t">{Quantity}</span>
                    <IconButton onClick={increaseQuantity}>
                      <AddIcon className="plus" />
                    </IconButton>
                  </div>
                ) : (
                  <button className="cart-b" onClick={() => handleCart()}>
                    ADD TO CART
                  </button>
                )}
              </div>
            ) : (
              <div className="add-cart-div">
                <button className="cart-b" onClick={() => navigate("/home")}>
                  Notify Me
                </button>
              </div>
            )}
            <button className="wish-b">
              <FavoriteIcon
                sx={{ color: "#FFFFFF", fontSize: "medium" }}
              ></FavoriteIcon>
              WISHLIST
            </button>
          </div>
        </div>
        <div className="right-div">
          <div className="b-detail">
            <div className="b-info">
              <div className="b-content-1">
                <h1 className="b-name-1">{books.bookName}</h1>
                <span className="b-author-1">by {books.author}</span>
              </div>
              <div className="b-rating-1">
                <span className="rating-1">
                  4.5{" "}
                  <StarOutlinedIcon
                    sx={{ color: "#FFFFFF", fontSize: "medium" }}
                  ></StarOutlinedIcon>
                </span>
                <span style={{ color: "#878787", fontSize: "11px" }}>
                  ({quantity})
                </span>
              </div>
              <div className="price-div-1">
                <h1 className="price-1">
                  Rs.{books.discountPrice}{" "}
                  <del className="del-1">Rs.{books.price}</del>
                </h1>
              </div>
            </div>
            <div className="details">
              <span className="a">Book Details</span>
              <span className="a-d">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellat, pariatur officia. Illo vel, culpa inventore, numquam
                quod id aliquam consequuntur fugit alias deserunt itaque, rem
                quis blanditiis maiores suscipit modi.
              </span>
            </div>
            <div></div>
          </div>
          <div className="feedback">
            <h1 className="cf">Customer Feedback</h1>
            <div className="o-rating">
              <span className="or">Overall rating</span>
              <Rating name="no-value" value={null} />
              <div className="review">
                <input
                  type="text"
                  placeholder="Write your review"
                  className="wyr"
                />
                <div className="b-d">
                  <button className="s-button">Submit</button>
                </div>
              </div>
            </div>
          </div>
          <div className="ratings">
            <div className="c-rating">
              <div className="c-info">
                <Avatar
                  sx={{ width: "25px", height: "25px", fontSize: "12px" }}
                >
                  HS
                </Avatar>
                <span className="c-name">Hashirama Senju</span>
              </div>
              <div>
                <Rating name="read-only" value={4} readOnly />
              </div>
              <div className="r-info">
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
                  repudiandae molestias sunt nam voluptatibus earum quam quidem
                  obcaecati officia ipsum.
                </span>
              </div>
            </div>
            <div className="c-rating">
              <div className="c-info">
                <Avatar
                  sx={{ width: "25px", height: "25px", fontSize: "12px" }}
                >
                  MD
                </Avatar>
                <span className="c-name">Madara Uchiha</span>
              </div>
              <div>
                <Rating name="read-only" value={3} readOnly />
              </div>
              <div className="r-info">
                <span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Accusantium, fugit ratione. Sint et itaque libero. Inventore
                  culpa nulla amet veritatis!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookInfo;
