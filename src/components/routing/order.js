import React, { useEffect, useState } from "react";
import NavbarB from "../header/header";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import GlowingCircles from "./Glowing";

const Order = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [filteredStatus, setFilteredStatus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterExpired, setFilterExpired] = useState(false);

  useEffect(() => {
    axios.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders")
      .then((response) => {
        const data = response.data;
        setAllProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    handleFilter(filteredStatus);
  }, [filteredStatus, filterExpired]); // Re-run filter when filteredStatus or filterExpired changes

  const handleFilter = (status) => {
    let newOrders = [...allProducts]; // Create a copy of allProducts
    if (status.length > 0) {
      newOrders = newOrders.filter((product) => status.includes(product.orderStatus));
    }
    if (filterExpired) {
      newOrders = newOrders.filter((product) => product.orderStatus === 'Expired');
    }
    setCount(newOrders.length);
    setFilteredProducts(newOrders);
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setFilteredStatus([...filteredStatus, value]);
    } else {
      setFilteredStatus(filteredStatus.filter((status) => status !== value));
    }
  };

  const handleExpiredCheckboxChange = (event) => {
    setFilterExpired(event.target.checked);
  };

  return (
    <>
      <NavbarB />
      <div style={{backgroundImage: `url("./aa.png")`}}>
      <div className="container mt-4">
        <h1 style={{ fontStyle: "oblique" }}>Orders...</h1>
        <div>
          <label>
            <input type="checkbox" value="New" onChange={handleCheckboxChange} />
            New
          </label>
          <label>
            <input type="checkbox" value="Packed" onChange={handleCheckboxChange} />
            Packed
          </label>
          <label>
            <input type="checkbox" value="InTransit" onChange={handleCheckboxChange} />
            In Transit
          </label>
          <label>
            <input type="checkbox" value="Delivered" onChange={handleCheckboxChange} />
            Delivered
          </label>
          <label>
            <input type="checkbox" value="Expired" onChange={handleExpiredCheckboxChange} />
            Expired
          </label>
        </div>
        {loading ? (
          <GlowingCircles/>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <>
            <p>Total Orders: {count}</p>
            <table className="table table-bordered" style={{border:"3px solid purple"}}>
              <thead>
                <tr>
                  <th style={{backgroundColor:"yellow"}}>ID</th>
                  <th style={{backgroundColor:"yellow"}}>Customer</th>
                  <th style={{backgroundColor:"yellow"}}>Date</th>
                  <th style={{backgroundColor:"yellow"}}>Amount</th>
                  <th style={{backgroundColor:"yellow"}}>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.customerName}</td>
                    <td>{product.orderDate}</td>
                    <td>{product.amount}</td>
                    <td>{product.orderStatus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
      </div>
    </>
  );
};

export default Order;
