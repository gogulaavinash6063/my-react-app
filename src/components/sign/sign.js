 import { useState } from "react"
import {  Link, useNavigate } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import image1 from "./image.png"
import "./LoginPage.css"




const LoginPage=()=>{
  const[user,setUser]=useState("")
  const[pass,setPass]=useState("")
  const history=useNavigate()
  
  
  const Newh=()=>{
     history("/orders")
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
      alert("username and password must be equal")
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
      backgroundSize:"auto",
      backgroundPosition:"center",
      
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
      
      <form id="form" onSubmit={handleClick}><header>
    <h2>LOGIN</h2>
  </header>
      <input type="text" placeholder="Enter Username..." value={user} onChange={handleUser} style={{width:"300px",height:"40px",borderStyle:"inset",border:"2px solid black",borderRadius:"8px",padding:"5px"}}/><br/><br/>
      <input type="password" placeholder=" Enter Password..." value={pass} onChange={handlePass} style={{width:"300px",height:"40px",borderStyle:"outset",border:"2px solid black",borderRadius:"8px",padding:"5px"}}/> <br/><br/>
      <button type="submit" >Submit</button>
    <Link to={"/orders"} style={{
      textDecoration:"none",
      color:"black",
      position:"relative",
      left:"150px"
    }}>Skip---></Link>
    </form>
    
    </div>
    
  )
}
export default LoginPage
