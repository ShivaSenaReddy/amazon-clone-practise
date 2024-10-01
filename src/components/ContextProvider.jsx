import React, { createContext, useContext } from 'react'
const Context = createContext();
function ContextProvider({ children }) {
  return (
    <Context.Provider value={{ cart: [{ id: 1, name: 'sony headphones', price: 99 }] }}>
      {children}
    </Context.Provider>
  )

}
export { Context }

export default ContextProvider
