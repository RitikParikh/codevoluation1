import React, {useContext} from 'react';
import { CountContext } from './index';

function ComponentN() {
    const countContext = useContext(CountContext)
  return (
    <>
        COMPONET N --{countContext.countState}
            <button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
            <button onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={()=>countContext.countDispatch('reset')}>🔃</button><br/>
    </>
  )
}

export default ComponentN