import React, { useEffect, useState } from "react";
import "../styles/MyOrders.scss";
import { getOrders } from "../utils/HttpService";
import OrderCard from "./OrderCard";
import Please from "./Please";
import { useNavigate } from "react-router-dom";

const OrderDiv = ({ item }) => {
  const date = item.orderDate
  return (
    <div className="orderData">
      <div className="orderData-left">
      {item.items.map((book) => (
        <OrderCard key={book._id} book={book} />
      ))}
      </div>
      <div className="orderData-right">
        <div className="date-div">
        <span className="orderdate">{date}</span>
        </div>

        <div className="total-div">
          <span className="ordertotal">Total: Rs.{item.total}</span>
        </div>
      </div>
    </div>
  );
};

const MyOrders = () => {
  const [isOrder, setIsOrder] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const status = localStorage.getItem("Token") ? true : false;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (status) {
          const res = await getOrders("order");
          console.log(res);
          setData(res.data?.data.orderData);
          if (data) {
            setIsOrder(true);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {status ? (
        <div className="o-cnt">
          <div style={{margin:"20px 300px"}}>
            <span style={{fontSize:"25px", fontWeight:"600"}}>My Orders</span>
          </div>
          <div className="order-cnt">
          {isOrder ? (
            <div className="orders">
              {data.map((ele) => (
                <OrderDiv key={ele._id} item={ele} />
              ))}
            </div>
          ) : (
            <div className="no-order-div">
                <span className="no-order-txt">No Orders</span>
                <button className="no-order-btn" onClick={()=>navigate("/home")}>Continue Shopping</button>
            </div>
          )}
          </div>
        </div>
      ) : (
        <div className="myo-cart">
          <Please />
        </div>
      )}
    </div>
  );
};

export default MyOrders;
