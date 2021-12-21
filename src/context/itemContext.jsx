import React, { useState } from 'react';

export const ItemContext = React.createContext()

export const ItemContextProvider = ({children}) =>{
  const [storeItems, setStoreItems]=useState([])
  return <ItemContext.Provider value={{storeItems,setStoreItems}}>
      {children}
    </ItemContext.Provider>

}

