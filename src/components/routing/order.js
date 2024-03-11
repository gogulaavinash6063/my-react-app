import { useEffect, useState } from "react";
import NavbarB from "../header/header";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Order = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [filteredStatus, setFilteredStatus] = useState([]);

  useEffect(() => {
    axios.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders")
      .then((response) => {
        const data = response.data;
        setAllProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  const handleFilter = (status) => {
    const newOrders = allProducts.filter((product) => product.orderStatus === status);
    setCount(newOrders.length);
    setFilteredProducts(newOrders);
    setFilteredStatus([status]);
  };

  return (
    <>
      <NavbarB />
      <div style={{backgroundImage: `url("./aa.png")`}}>
      <div className="container mt-4">
        <h1 style={{ fontStyle: "oblique" }}>Orders...</h1>
        <div className="mb-3">
          <div className="form-check form-check-inline">
            <input
              type="checkbox"
              className="form-check-input"
              id="newCheckbox"
              value={"New"}
              onChange={() => handleFilter("New")}
            />
            <label className="form-check-label" htmlFor="newCheckbox">New</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="checkbox"
              className="form-check-input"
              id="packedCheckbox"
              value={"Packed"}
              onChange={() => handleFilter("Packed")}
            />
            <label className="form-check-label" htmlFor="packedCheckbox">Packed</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="checkbox"
              className="form-check-input"
              id="inTransitCheckbox"
              value={"InTransit"}
              onChange={() => handleFilter("InTransit")}
            />
            <label className="form-check-label" htmlFor="inTransitCheckbox">InTransit</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="checkbox"
              className="form-check-input"
              id="deliveredCheckbox"
              value={"Delivered"}
              onChange={() => handleFilter("Delivered")}
            />
            <label className="form-check-label" htmlFor="deliveredCheckbox">Delivered</label>
          </div>
        </div>
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
      </div>
      </div>
    </>
  );
};

export default Order;
