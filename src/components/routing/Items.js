import { useEffect, useState } from "react";
import NavbarB from "../header/header";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Items = () => {
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);

  useEffect(() => {
    axios.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products")
      .then(response => {
        setProducts(response.data);
        setOriginalProducts(response.data);
      });
  }, []);

  const HandleExpired = () => {
    const currentDate = new Date();
    const FilterExpired = products.filter((product) => new Date(product.expiryDate) >= currentDate);
    setProducts(FilterExpired);
  };

  const HandleStock = () => {
    const FilterStock = products.filter((product) => product.stock <= 200);
    setProducts(FilterStock);
  };

  const resetFilters = () => {
    setProducts(originalProducts);
  };

  return (
    <>
      <NavbarB />
      <div className="container mt-4">
        <h1 style={{ fontStyle: "oblique" }}>Products....</h1>
        <div className="mb-3">
          <h5>Filters</h5>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="expiredCheckbox" onChange={HandleExpired} />
            <label className="form-check-label" htmlFor="expiredCheckbox">Expired</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="stockCheckbox" onChange={HandleStock} />
            <label className="form-check-label" htmlFor="stockCheckbox">Low Stock</label>
          </div>
        </div>
        <table className="table table-bordered" style={{ borderColor: 'blue',padding:"20px",alignItems:"center" }}>
          <thead>
            <tr>
              <th style={{backgroundColor:"green"}}>ID</th>
              <th style={{backgroundColor:"green"}}>Product Name</th>
              <th style={{backgroundColor:"green"}}>Product Brand</th>
              <th style={{backgroundColor:"green"}}>Expiry Date</th>
              <th style={{backgroundColor:"green"}}>Unit Price</th>
              <th style={{backgroundColor:"green"}}>Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.medicineName}</td>
                <td>{product.medicineBrand}</td>
                <td>{product.expiryDate}</td>
                <td>{product.unitPrice}</td>
                <td>{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Items;
