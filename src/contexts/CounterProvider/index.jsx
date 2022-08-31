import { useReducer } from "react"
import { CounterContext } from "./context"
import { data } from "./data";
import { Reducer } from "./reducer";


export const CounterProvider = ({ children }) => {

  const [counterState, counterDispatch] = useReducer(Reducer, data);

  return (
    <CounterContext.Provider value={{ counterState, counterDispatch }}>
      {children}
    </CounterContext.Provider>
  )
}