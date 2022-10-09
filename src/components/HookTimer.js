import React, {useState, useEffect,useRef} from 'react'

function HookTimer() {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef()
    useEffect(() => {
      intervalRef.current = setInterval(() =>{
        setTimer(prevTimer => prevTimer + 1)
      },1000)
    
      return ()=>{
          clearInterval(intervalRef.current);
      } 
    }, [])
    
  return (
    <>
    <div>HookTimer - {timer}</div>
    <button type="button" onClick={()=>clearInterval(intervalRef.current)}>Clear Timer</button>
    </>
  )
}

export default HookTimer