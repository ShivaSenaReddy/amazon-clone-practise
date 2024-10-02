import React, { createContext, useContext, useReducer } from 'react'
import reducer from './reducer'
const State = createContext()
const initialState = []
function StateProvider({ children }) {
    return (
        <State.Provider value={useReducer(reducer, initialState)}>
            {children}
        </State.Provider>
    )
}
function useDispatch() {
    const [state, dispatch] = useContext(State);
    // console.log(dispatch)
    localStorage.setItem('cart', JSON.stringify(state))
    return dispatch;
}

export { useDispatch, State };
export default StateProvider
export const useStateValue = () => useContext(State);
export function useStateExport() {
    const [cart, dispatch] = useContext(State);
    return [cart, dispatch]
}
