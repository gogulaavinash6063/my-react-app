 import { useState } from "react"
import {  Link, useNavigate } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import image1 from "./kafene.jpeg"
import image2 from "./th.jpeg"



const LoginPage=()=>{
  const[user,setUser]=useState("")
  const[pass,setPass]=useState("")
  const history=useNavigate()
  
  
  const Newh=()=>{
     history("/navbarB")
    }

  const handleClick=(event)=>{
    event.preventDefault()
    if (!user.trim() || !pass.trim()) {
      alert("Please enter both username and password");
      return;
    }
    if(user===pass){
      Newh()
    }
    else{
      alert("inavaild details")
    }
  }
  const handleUser=(event)=>{
    setUser(event.target.value)
  }
  const handlePass=(event)=>{
    setPass(event.target.value)
  }
  return(
    < div style={{
      backgroundImage:`url(${image1})`,
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      backgroundPosition:"center"
    }}>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Kafene</Navbar.Brand>
          <Nav className="me-auto" style={{
          display:"flex",
          flexDirection:"row",
          gap:"30px",
          position:"relative",
          top:"1px"
        }}>
          <Link to="#"  onClick={() => alert("Please enter username and password")} style={{textDecoration:"none",color:"white"}}>
        Orders
      </Link>
      <Link to="#"  onClick={() => alert("Please enter username and password")} style={{textDecoration:"none",color:"white"}}>
        Products
      </Link>
      <Link to="#"  onClick={() => alert("Please enter username and password")} style={{textDecoration:"none",color:"white"}}>
        Users
      </Link>
          </Nav>
        </Container>
      </Navbar>
    <form onSubmit={handleClick} style={{
      //  backgroundImage: `url(${image1})`,
      //  backgroundRepeat:"no-repeat",
      //  backgroundSize:"cover",
      width:"400px",
      height:"400px",
      border:"2px solid black",
      borderStyle:"groove",
      position:"relative",
      left:"550px",
      top:"150px"
    }}>
      <div style={{
        position:"relative",
        left:"50px",
        top:"120px"
      }}>
      <input type="text" placeholder="Enter Username..." value={user} onChange={handleUser} style={{width:"300px",height:"40px",borderStyle:"inset",border:"2px solid black",borderRadius:"8px",padding:"5px"}}/><br/><br/>
      <input type="text" placeholder=" Enter Password..." value={pass} onChange={handlePass} style={{width:"300px",height:"40px",borderStyle:"outset",border:"2px solid black",borderRadius:"8px",padding:"5px"}}/> <br/><br/>
      <button type="submit" >Submit</button>
      </div>
    </form>
    
    </div>
    
  )
}
export default LoginPage
