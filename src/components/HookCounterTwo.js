import React, {useState} from 'react'

function HookCounterTwo() {
    const initialCount = 0;
    const [count, setCount]  = useState(initialCount);

  return (
    <div>Count : {count} <br/>
        <button onClick={()=>{setCount((previousCount)=>previousCount + 1)}}>Increment</button>
        <button onClick={()=>{setCount((previousCount)=>previousCount - 1)}}>Decrement</button>
        <button onClick={()=>{setCount(initialCount)}}>Reset</button>
    </div>
  )
}

export default HookCounterTwo