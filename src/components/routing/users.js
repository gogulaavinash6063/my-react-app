import { useEffect, useState } from "react"
import NavbarB from "../header/header"
import axios from "axios"

const Users=()=>{
    const [user,setUser]=useState([])
    const [originalUsers, setOriginalUsers] = useState([]);
    const [search,setSearch]=useState("")
    useEffect(()=>{
        axios.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users")
        .then(response=>{
            setUser(response.data)
        setOriginalUsers(response.data);
         } )

    },[])

    const handleClick = (event) => {
        event.preventDefault();
    
        
        if (search.length > 2) {
          
          const filteredUsers = user.filter((user) =>
            user.fullName.toLowerCase().includes(search.toLowerCase())
          );
          setUser(filteredUsers);
        } else {
            setUser(originalUsers);
          alert("Enter more than two characters");
        }
      };
      
      const handleSearch = (event) => {
        event.preventDefault();
        setSearch(event.target.value);
    
        // Reset user state to originalUsers when search input is updated
        setUser(originalUsers);
      };

    
    return(
        <>
        <NavbarB/>
        <h1 style={{
            fontStyle:"oblique",
            marginLeft:"100px",
            marginTop:"50px"
        }}>Users.....</h1>
        <form onSubmit={handleClick}>
         <input type="text" placeholder="Search...." style={{ width:"600px", height:"40px",marginLeft:"100px",marginTop:"25px"}}value={search} onChange={handleSearch}/>
         <button type="submit" style={{ textDecoration:"none",width:"100px",height:"40px",marginLeft:"10px",borderRadius:"8%",color:"white",backgroundColor:"green" }}>Submit</button>
         </form>
         <table style={{
            width:"900px",
            marginLeft:"150px",
            marginTop:"50px",
            height:"50px"
         }}>
            <thead>
                <tr style={{
                    border:"2px solid black",
                    height:"40px"
                }}>
                    <th>ID</th>
                    <th>UserAvatar</th>
                    <th>FullName</th>
                    <th>DOB</th>
                    <th>Gender</th>
                    <th>CurrentLocation</th>
                </tr>
            </thead>
            <tbody>
                {
                    user.map((item)=>(
                        <tr>
                            <td>{item.id}</td>
                           <td> <img src={item.profilePic}/></td>
                            <td>{item.fullName}</td>
                            <td>{item.dob}</td>
                            <td>{item.gender}</td>
                            <td>{item.currentCity}</td>
                        </tr>
                       

                    ))
                }
            </tbody>

         </table>
         

        </>
    )
}
export default Users