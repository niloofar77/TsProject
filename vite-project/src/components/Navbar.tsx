import{Container,Navbar as NavbarBS,Nav,Button} from "react-bootstrap"
import { NavLink } from "react-router"
import { useCartContext } from "../assets/context/CartContext"
function Navbar(){
    const{cartQty,openCart,closeCart}=useCartContext()
    return(<>
    <NavbarBS className="bg-dark text-light ">
        <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink} className="text-light">
            Home
            </Nav.Link>
            <Nav.Link to="/shop" as={NavLink} className="text-light">
            shop
            </Nav.Link>
            <Nav.Link to="/about" as={NavLink} className="text-light">
            about
            </Nav.Link>
            </Nav>
            <Button variant="outline-light" style={{width:"3rem",height:"3rem",position:"relative",fontSize:"1.2rem"}} onClick={openCart}>
                <i className="bi bi-cart"></i>
                <div className="rounded-circle  bg-secondary d-flex justify-content-center  align-items-center"
                style={{
                    color:"white",
                    width:"1.2rem",
                    height:"1.2rem",
                    position:"absolute",
                    fontSize:"1.2rem",
                    bottom:0,
                    right:0,
                    transform:"translate(25%,25%)"


                }}
                
                >{cartQty}</div>
            </Button>



    </NavbarBS>
    </>)

}
export default Navbar