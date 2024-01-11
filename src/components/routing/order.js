import { useEffect, useState } from "react";
import NavbarB from "../header/header";
import axios from "axios";

const Order = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [filteredStatus, setFilteredStatus] = useState([]);

  useEffect(() => {
    axios.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders").then((response) => {
      setProducts(response.data);
    });
  }, [])
  

  const handleStatusChange = (status) => {
    setFilteredStatus(status);
  };

  const filterItems = () => {
    if (filteredStatus.length === 0) {
      setProducts(products);
    } else {
      const filteredItems = products.filter((product) => filteredStatus.includes(product.orderStatus));
      setProducts(filteredItems);
    }
  };

  const handleNew = () => {
    const newOrders = products.filter((product) => product.orderStatus === "New");
    setCount(newOrders.length);
    setProducts(newOrders);
    setFilteredStatus(["New"]);
  }
  const handlePacked = () => {
    const newOrders = products.filter((product) => product.orderStatus === "Packed");
    setCount(newOrders.length);
    setProducts(newOrders);
    setFilteredStatus(["Packed"]);
  }
  const handleTransit = () => {
    const newOrders = products.filter((product) => product.orderStatus === "InTransit");
    setCount(newOrders.length);
    setProducts(newOrders);
    setFilteredStatus(["InTransit"]);
  }
  const handleDelivered = () => {
    const newOrders = products.filter((product) => product.orderStatus === "Delivered");
    setCount(newOrders.length);
    setProducts(newOrders);
    setFilteredStatus(["Delivered"]);
  }
  

  return (
    <>
      <NavbarB />
      <h1 style={{ fontStyle: "oblique", marginLeft: "100px", marginTop: "50px" }}>Orders...</h1>
      <div style={{ marginLeft: "120px", marginTop: "50px" }}>
        <p>Count={count}</p>
        <input type="checkbox" value={"New"} onChange={() => handleNew()} />
        <label>New</label><br/>
        <input type="checkbox" value={"New"} onChange={() => handlePacked()} />
        <label>Packed</label><br/>
        <input type="checkbox" value={"New"} onChange={() => handleTransit()} />
        <label>InTransit</label><br/>
        <input type="checkbox" value={"New"} onChange={() => handleDelivered()} />
        <label>Delivered</label><br/>
        <br />
      </div>
      <table
        style={{
          border: "2px solid black",
          marginLeft: "100px",
          marginTop: "40px",
          width: "1350px",
          height: "1200px",
        }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
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
  );
}; 

export default Order;
