// import { createContext,ReactNode,useContext,useState} from "react";
// type CartProviderProps={
//     children:ReactNode
// }
// type CartItem={
//     id:number,
//     qty:number
// }

// type CartContext={
//     getItemQry:(id:number)=>number
//     addItem:(id:number)=> void
//     decreaseItem:(id:number)=>void
//     removeItem:(id:number)=>void
// }
// const CartContext=createContext({} as CartContext)
// export function useCartContext(){
//     return useContext(CartContext)
// }

// export function CartProvider({children}:CartProviderProps){
//     const [cartItems,setCartItems]=useState<CartItem[]>([])

//     function getItemQry(id:number){
//         return cartItems.find((item:CartItem)=>item.id===id)?.qty||0
//     }
//     function addItem(id:number){
//         setCartItems((curItems)=>{
//             if(curItems.find((item:CartItem)=>item.id===id)===null){
//                 return[...curItems,{id,qty:1}]
//             }
//             else{
//                 return curItems.map((item:CartItem)=>{
//                     if(item.id===id){
//                         return {...item,qty:item.qty+1}
//                     }
//                     else{
//                         return item
//                     }
//                 })
//             }
//         })
//     }
//      function decreaseItem(id:number){
//         setCartItems((curItems)=>{
//             if(curItems.find((item:CartItem)=>item.id===id)?.qty==1){
//                 return curItems.filter((item:CartItem)=>item.id!==id)
//             }
//             else{
//                 return curItems.map((item:CartItem)=>{
//                     if(item.id===id){
//                         return {...item,qty:item.qty-1}
//                     }
//                     else{
//                         return item
//                     }
//                 })
//             }

//         })
//      }
//      function removeItem(id:number){
//           setCartItems((curItems)=>{
//            return curItems.filter((item:CartItem)=>item.id!==id)
            

//         })

//      }

//     return(<>
//     <CartContext.Provider value={{getItemQry,decreaseItem,removeItem,addItem}}>
//         {children}
//     </CartContext.Provider>
//     </>)
// }
import { createContext, ReactNode, useContext, useState } from "react";

type CartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  qty: number;
};

type CartContextType = {
  getItemQty: (id: number) => number;
  addItem: (id: number) => void;
  decreaseItem: (id: number) => void;
  removeItem: (id: number) => void;
  cartItems: CartItem[]; // Added this to expose cart state if needed
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
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

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
        .filter((item) => item.qty > 0) // Removes item if qty reaches 0
    );
  }

  function removeItem(id: number) {
    setCartItems((curItems) => curItems.filter((item) => item.id !== id));
  }

  return (
    <CartContext.Provider
      value={{ getItemQty, addItem, decreaseItem, removeItem, cartItems }}
    >
      {children}
    </CartContext.Provider>
  );
}
