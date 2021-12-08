import React, { createContext, useState } from 'react'
// 1 - CREAR EL CONTEXTO
export const cartContext = createContext();
// 2 - CREAR EL COMPONENTE PROVIDER (ItemsProvider)

export const CartItemsProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	// 3 - RETORNAMOS NUESTRO CONTEXT CON UN .PROVIDER
	return (
		<cartContext.Provider value={[cartItems, setCartItems]}>
			{/* 4 - PROPS.CHILDREN O BIEN CHILDREN */}
			{children}
		</cartContext.Provider>
	);
};