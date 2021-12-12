import React, { createContext, useState } from 'react'

// 1 - CREAR EL CONTEXTO
export const CartContext = createContext(false);

//const items = [];
//
//// 2 - CREAR EL COMPONENTE PROVIDER (ItemsProvider)
//export const CartItemsProvider = ({ children }) => {
//	const [cartItems, setCartItems] = useState([items]);
//	// 3 - RETORNAMOS NUESTRO CONTEXT CON UN .PROVIDER
//	return (
//		<cartContext.Provider value={[cartItems, setCartItems]}>
//			{/* 4 - PROPS.CHILDREN O BIEN CHILDREN */}
//			{children}
//		</cartContext.Provider>
//	);
//};

export default function CacheProvider({defaultValue=[], children}) {
	const [cache, setCache] = useState(defaultValue);

function getFromCache(id) {
	return cache.find(obj => obj.id===id)
}

function isInCache(id) {
	return id === undefined ? undefined : getFromCache !== undefined
}

function addToCache (obj) {
	if (isInCache (obj && obj.id)) {
		console.log('EL objeto ya se encuentra en el carrito')
		return;
	}
	setCache([...cache, obj]);
}

return <CartContext.Provider value={{cache, addToCache, isInCache, cacheSize: cache.length}}>
	{children}
</CartContext.Provider>
}