import Toast from "../header/Toast"
import NavbarB from "../header/header"
import GreetingComponent from "../sign/greeting"

const Home=()=>{
    return(
        <>
        <NavbarB/>
        <div>
        <h2 style={{
          position:"relative",
          top:"20px"
        }}><center><GreetingComponent/> User,Welcome to Kafene Order Management</center></h2>
      </div>
        <Toast/>
        </>
    )
}
export default Home