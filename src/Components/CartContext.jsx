import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();
const CartProvider = ({ children }) => {
    const [notesCart, setNotesCart] = useState([])
    const [questionCart,setQuestionCart]=useState([])
    const [expCart,setExpCart]=useState([])
    useEffect(() => {

        let existingCartItem = localStorage.getItem("notesCart");
        if (existingCartItem) setNotesCart(JSON.parse(existingCartItem));
    }, [])
    
    const value ={
        notesCart,
        setNotesCart,
        questionCart,
        setNotesCart,
        expCart,
        setExpCart
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );


};

const useCart = () => useContext(CartContext);
export { useCart, CartProvider }