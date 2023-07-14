import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();
const CartProvider = ({ children }) => {
    const [notesCart, setNotesCart] = useState([])
    const [questionCart, setQuestionCart] = useState([])
    const [expCart, setExpCart] = useState([])
    useEffect(() => {

        let existingNoteCartItem = localStorage.getItem("notesCart");
        if (existingNoteCartItem) setNotesCart(JSON.parse(existingNoteCartItem));

        let existingQPCartItem = localStorage.getItem("questionCart");
        if (existingQPCartItem) setQuestionCart(JSON.parse(existingQPCartItem));

        let existingExpCartItem = localStorage.getItem("expCart");
        if (existingExpCartItem) setExpCart(JSON.parse(existingExpCartItem));
    }, [])

    const value = {
        notesCart,
        setNotesCart,
        questionCart,
        setQuestionCart,
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