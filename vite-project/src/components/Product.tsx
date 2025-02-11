
import {Card,Button} from"react-bootstrap"
import { useCartContext } from "../assets/context/CartContext"

type ProductProps={
    id:number,
    title:string,
    price:number,
    imgUrl:string
}

function Product({id,title,price,imgUrl}:ProductProps){
     const {getItemQty,addItem,decreaseItem,removeItem}=useCartContext()
    const qty=getItemQty(id)
    return(<>
    <Card>
        <Card.Img variant="top" src={imgUrl} height="200px"
        style={{objectFit:"cover"}}>
            
        </Card.Img>
        <Card.Body className="d-flex flex-column bg-dark">
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                <span className="fs-2 text-light">{title}</span>
                <span className="ms-2 text-light">{price}</span>
            </Card.Title>
            {qty===0?(
                <Button className="w-100 btn-secondary"  onClick={()=>addItem(id)}>add to cart</Button>
            ):(<div className="d-flex align-items-center flex-column"
            style={{gap:"0.5rem"}}
            
            >
                <div  className="d-flex align-items-center justify-content-center" style={{gap:"0.5rem"}}>
                    
                <Button className="btn-secondary  text-light" onClick={()=>addItem(id)}>+</Button>
                <span className="fs-5 m-3 text-light">{qty}</span>
                <Button  className="btn-secondary  text-light"  onClick={()=>decreaseItem(id)}>-</Button>
                </div>
                <Button className="btn-light" size="sm" onClick={()=>removeItem(id)}>Remove</Button>
                
                
                </div>)}


        </Card.Body>

    </Card>
    </>)

}
export default Product