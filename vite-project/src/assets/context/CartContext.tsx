import { createContext, ReactNode, use, useContext, useState } from "react";
import Cart from "../../components/Cart";

type CartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  qty: number;
};

type CartContextType = {
  openCart:()=>void,
  closeCart:()=>void,
  getItemQty: (id: number) => number;
  addItem: (id: number) => void;
  decreaseItem: (id: number) => void;
  removeItem: (id: number) => void;
  cartItems: CartItem[]; 
  cartQty:number,
   
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCartContext() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
}

export function CartProvider({ children }: CartProviderProps) {
    const[isOpen,setIsOpen]=useState(false)
   

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const cartQty=cartItems.reduce((qty,item)=>item.qty+qty,0)
  const openCart=()=>{
    setIsOpen(true)
  }
  const closeCart=()=>{
    setIsOpen(false)
  }

  function getItemQty(id: number) {
    return cartItems.find((item) => item.id === id)?.qty || 0;
  }

  function addItem(id: number) {
    setCartItems((curItems) => {
      const existingItem = curItems.find((item) => item.id === id);
      if (!existingItem) {
        return [...curItems, { id, qty: 1 }];
      } else {
        return curItems.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        );
      }
    });
  }

  function decreaseItem(id: number) {
    setCartItems((curItems) =>
      curItems
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0) 
    );
  }

  function removeItem(id: number) {
    setCartItems((curItems) => curItems.filter((item) => item.id !== id));
  }

  return (
    <CartContext.Provider
      value={{ getItemQty, addItem, decreaseItem, removeItem, cartItems,cartQty,openCart,closeCart }}
    >
      {children}
      <Cart  isOpen={isOpen}></Cart>
    </CartContext.Provider>
  );
}
