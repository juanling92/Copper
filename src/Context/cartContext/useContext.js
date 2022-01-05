import React, { createContext, useState, useContext } from 'react'

export const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [items, setItems] = useState([])

    const isInCart = (id) => {
        const  found = items.find(item => item.id === id);
        return found;
    }

//Añadir items al carrito
    const addItem = (item, qty) => {
        isInCart(item.id)
        ?
        setItems(items.map((prod) => {
            if(prod.id === item.id) {
                prod.qty += qty;
            }
            return prod
        }))
        :
        setItems([...items, {id: item.id, name: item.product, price: item.price, img: item.img, qty: qty, stock: item.stock}]);
    }
//Remover items por ID
    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id))
    }

//Vaciar carrito
    const clearItems = () => {
        setItems([])
    }

//Precio total
    const totalPrice = () => {
        //console.log(items.reduce((acc, item) => acc + item.price * item.count, 0));
        return items.reduce(
        (acc, value) => acc + value.price * value.qty,
        0
        );
    };

    return (
        <CartContext.Provider value={{items, addItem, removeItem, clearItems, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}
