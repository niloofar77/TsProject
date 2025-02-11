
import{Routes,Route, BrowserRouter} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import { Container } from "react-bootstrap"
import NavBar from "./components/Navbar"
import { CartProvider } from "./assets/context/CartContext"

function App() {


  return (
    <>
    <CartProvider>
    <NavBar></NavBar>
    <Container>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/shop" element={<Shop></Shop>}/>
        <Route path="/shop" element={<Shop></Shop>}/>
      </Routes>
      </Container>
 
    </CartProvider>
   
    </>
  )
}

export default App
