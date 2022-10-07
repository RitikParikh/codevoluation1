import React, {useReducer} from 'react'

const initialState = {
    firstCounter: 0, 
    secondCounter: 10, 
};
const reducer = (state, action) =>{
   switch (action.type) {
    case 'increment':
        return {...state, firstCounter: state.firstCounter+action.value}
    case 'decrement':
        return  state.firstCounter > 0 &&  state.firstCounter-action.value > 0? {...state, firstCounter: state.firstCounter-action.value} :  {...state, firstCounter: initialState.firstCounter};
    case 'increment2':
        return {...state, secondCounter: state.secondCounter+action.value}
    case 'decrement2':
        return  state.secondCounter > 0 &&  state.secondCounter-action.value > 0? {...state, secondCounter: state.secondCounter-action.value} :  {...state, secondCounter: initialState.secondCounter};
    case 'reset':
        return initialState;
    default: return state;
   }
}

function CounterTwo() {
  const [count, dispatch] =  useReducer(reducer,initialState)
  return (
    <div>
        <h4>Count - {count.firstCounter}</h4>
        <h4>Count - {count.secondCounter}</h4>
        <button onClick={()=>dispatch({type : 'increment', value :1})}>Increment</button><br/>
        <button onClick={()=>dispatch({type : 'decrement', value :1})}>Decrement</button><br/>
        <button onClick={()=>dispatch({type : 'increment2', value :5})}>Increment2</button><br/>
        <button onClick={()=>dispatch({type : 'decrement2', value :5})}>Decrement2</button><br/>
        <button onClick={()=>dispatch({type : 'reset'})}>🔃</button><br/>
    </div>
  )
}

export default CounterTwo