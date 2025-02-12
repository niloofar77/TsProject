import { useCartContext } from "../assets/context/CartContext"
import ProductItems from "../data/products.json"
import{Button, Stack} from "react-bootstrap"

type CartItemProps={
    id:number,
    qty:number,

}
function CartItem({id,qty}:CartItemProps){
    const{removeItem}=useCartContext()
    const product=ProductItems.find((item)=>item.id===id)
    if(!product) return null
    return(<>
    <Stack dir="horizontal" gap={2} className="d-flex align-items-center">
        <img src={product?.imgUrl}
        style={{width:"125px",height:"75px",objectFit:"cover"}}
        
        ></img>
        <div className="me-auto text-dark">
            <div>{product?.title}
                {qty>1&&<span className="text-muted" style={{fontSize:"0.65rem"}}>{qty}</span>}

            <div>{product.price*qty}</div>
            <Button
            variant="outline-dark"
            size="sm"
            onClick={()=>removeItem(product.id)}
            
            
            >&times</Button>
            </div>

           

        </div>


    </Stack>
    
    </>)

 }
 export default CartItem