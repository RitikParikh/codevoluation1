import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {

    const [count, setCount] = useState(0); 
    const tick =() =>{
        console.log("Hook1")
        setCount((prevCount)=>{
            return prevCount + 1;
        });
    }
    useEffect(()=>{
        console.log("Hook")
        const interval = setInterval(tick,1000);
        return ()=>{
            clearInterval(interval);
        }
    },[count])
  return (
    <div>{count}</div>
  )
}

export default IntervalHookCounter