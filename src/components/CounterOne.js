import React, {useReducer} from 'react'

const initialState = 0;
const reducer = (state, action) =>{
   switch (action) {
    case 'increment':
        return state+1;
    case 'decrement':
        return state>0 ? state-1 : state;
    case 'reset':
        return initialState;
    default: return state;
   }
}

function CounterOne() {
  const [count, dispatch] =  useReducer(reducer,initialState)
  return (
    <div>
        <h4>Count - {count}</h4>
        <button onClick={()=>dispatch('increment')}>Increment</button><br/>
        <button onClick={()=>dispatch('decrement')}>Decrement</button><br/>
        <button onClick={()=>dispatch('reset')}>🔃</button><br/>
    </div>
  )
}

export default CounterOne