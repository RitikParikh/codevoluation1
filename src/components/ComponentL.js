import React, {useContext} from 'react';
import { CountContext } from './index';

function ComponentL() {
    const countContext = useContext(CountContext)
  return (
    <>
        COMPONET L -- {countContext.countState}
            <button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
            <button onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={()=>countContext.countDispatch('reset')}>🔃</button><br/>
    </>
  )
}

export default ComponentL