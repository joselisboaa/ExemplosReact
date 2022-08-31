import { useContext } from "react"
import { decrementCounter, incrementCounter } from "../../contexts/CounterProvider/actions";
import { CounterContext } from "../../contexts/CounterProvider/context";


export const Counter = () => {

  const counterContext = useContext(CounterContext);
  const {counterState, counterDispatch} = counterContext;


  return (
    <div>
      <h1>Counter: {counterState.counter}</h1>
      <button onClick={() => incrementCounter(counterDispatch)}>Incrementador</button>
      <button onClick={() => decrementCounter(counterDispatch)}>Decrementador</button>
    </div>
  )
}