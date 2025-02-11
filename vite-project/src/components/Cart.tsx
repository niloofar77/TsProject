import { useCartContext } from "../assets/context/CartContext"
import{Offcanvas} from "react-bootstrap"

type CartProps={
    isOpen:boolean
}


function Cart({isOpen}:CartProps){
    const{closeCart}=useCartContext()
    return(<>
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">

        <Offcanvas.Header closeButton>
            <Offcanvas.Title>ssssss</Offcanvas.Title>
        </Offcanvas.Header>
    </Offcanvas>
    
    </>)

}
export default Cart