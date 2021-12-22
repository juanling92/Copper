import React, { createContext, useState } from 'react'

export const CartContext = createContext([]);

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
        setItems([...items, {id: item.id, name: item.producto, price: item.precio, img: item.imagen, qty: qty, stock: item.stock}]);
    }
//Remover items por ID
    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id))
    }

//Vaciar carrito
    const clearItems = () => {
        setItems([])
    }

    return (
        <CartContext.Provider value={{items, addItem, removeItem, clearItems}}>
            {children}
        </CartContext.Provider>
    )
}
