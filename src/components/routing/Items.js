import { useEffect, useState } from "react"
import NavbarB from "../header/header"
import axios from "axios"

const Items=()=>{
    const[products,setProducts]=useState([])
    const [originalProducts, setOriginalProducts] = useState([]);

    useEffect(()=>{
        axios.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products")
        .then(response=>{
            setProducts(response.data)
            setOriginalProducts(response.data);

         })   
    },[])

    const HandleExpired=()=>{
        const currentDate = new Date()
        const FilterExpired=products.filter((product)=>new Date(product.expiryDate)>=currentDate)
        setProducts(FilterExpired)
    }
    const HandleStock=()=>{
        const FilterStock=products.filter((product)=>product.stock<=200)
        setProducts(FilterStock)
    }
    const resetFilters = () => {
        setProducts(originalProducts);
      };

    return(
        <>
        <NavbarB/>
        <h1 style={{
            fontStyle:"oblique",
            marginLeft:"100px",
            marginTop:"50px"
        }}>Products....</h1>
        <div style={{
            marginLeft:"100px",
            marginTop:"50px"
        }}>
        <h5>Filters</h5>
        <input type="checkbox" value={"Expired"} onChange={HandleExpired}/><label>Expired</label><br/>
        <input type="checkbox" value={"stock"} onChange={HandleStock}/><label>Low Stack</label>
        </div>
        <table style={{
            width:"1210px",
            height:"1200px",
            marginLeft:"200px",
            
        }}>
            <thead>
                <tr style={{
                     border:"2px solid black",
                }}>
                    <th>ID</th>
                    <th>Product Nmae</th>
                    <th>Product Brand</th>
                    <th>Expiry Date</th>
                    <th>Unit Price</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
                {
                products.map((product)=>(
                    <tr>
                        <td>{product.id}</td>
                        <td>{product.medicineName}</td>
                        <td>{product.medicineBrand}</td>
                        <td>{product.expiryDate}</td>
                        <td>{product.unitPrice}</td>
                        <td>{product.stock}</td>
                    </tr>
                ))   
                }
            </tbody>
        </table>
        </>
    )
}
export default Items