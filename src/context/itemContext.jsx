import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const ItemContext = React.createContext()

export const ItemContextProvider = ({ children }) => {
  const [storeItems, setStoreItems] = useState([])
  return <ItemContext.Provider value={{ storeItems, setStoreItems }}>
    {children}
  </ItemContext.Provider>
}

ItemContextProvider.propTypes = {
  children: PropTypes.array
}
