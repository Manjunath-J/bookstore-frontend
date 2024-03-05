import React, { useEffect, useState } from "react";
import "../styles/Wishlist.scss";
import WishCard from "./WishCard";
import Please from "./Please";
import { getWishList } from "../utils/HttpService";

const Wishlist = () => {
  const [isList, setIsList] = useState(false);
  const [wishData, setWishData] = useState([]);
  const status = localStorage.getItem("Token") ? true : false;

  useEffect(() => {
    const fetchData = async () => {
      if (status) {
        const res = await getWishList("/wishlist");
        if (res.data.items) {
          setWishData(res.data.items);
          if(res.data.items.length>0)
            setIsList(true);
        }
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {status ? (
        <div className="w-cnt">
          <div className="my-w">
            <span className="w-text">My Wishlist ({wishData.length})</span>
          </div>
          <div className="w-card">
            {isList ? (
              wishData.map((book) => <WishCard key={book._id} book={book} />)
            ) : (
              <div className="no-item-wish">
                <span className="no-wish">No Items in the WishList</span>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="p-cart">
          <Please />
        </div>
      )}
    </div>
  );
};

export default Wishlist;
