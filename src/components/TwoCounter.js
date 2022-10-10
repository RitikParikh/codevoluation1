import React from 'react'
import useCounter from '../Hooks/useCounter'
function TwoCounter() {
    const [count, decrement,increment,reset] = useCounter(10,1);
  return (
    <div>Count : {count} <br/>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>
    </div>
  )
}

export default TwoCounter