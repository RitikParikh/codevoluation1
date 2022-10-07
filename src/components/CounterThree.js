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

function CounterThree() {
  const [count, dispatch] =  useReducer(reducer,initialState);
  const [countTwo, dispatchTwo] =  useReducer(reducer,initialState);
  return (
    <div>
        <h4>Count - {count}</h4>
        <button onClick={()=>dispatch('increment')}>Increment</button>
        <button onClick={()=>dispatch('decrement')}>Decrement</button>
        <button onClick={()=>dispatch('reset')}>🔃</button><br/>
        <h4>Count Two - {countTwo}</h4>
        <button onClick={()=>dispatchTwo('increment')}>Increment</button>
        <button onClick={()=>dispatchTwo('decrement')}>Decrement</button>
        <button onClick={()=>dispatchTwo('reset')}>🔃</button><br/>
    </div>
  )
}

export default CounterThree