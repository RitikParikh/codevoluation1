import React from 'react'
import useCounter from '../Hooks/useCounter'

function OneCounter() {
    const [count, decrement,increment,reset] = useCounter(0,15);
  return (
    <div>Count : {count} <br/>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>
    </div>
  )
}

export default OneCounter