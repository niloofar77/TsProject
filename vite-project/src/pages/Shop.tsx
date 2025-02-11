import products from "../data/products.json"
import Product from "../components/Product"
import {Row,Col} from "react-bootstrap"
function Shop(){
    return(<>
    <Row md={2} xs={1} lg={3} className="g-3">
     {products.map((item)=>(
      <Col key={item.id}>
     {/* {JSON.stringify(item)} */}
     <Product {...item}></Product>
     
     </Col>)
       
        )}
    </Row>
 
    </>)

}
export default Shop