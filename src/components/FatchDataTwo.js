import React, {useReducer, useEffect} from 'react'
import axios from 'axios';

const initialState ={
    loading:false,
    error:'',
    post:{}
}

const reducer = (state, action) =>{
    switch(action.type) {
        case 'FETCH_SUCESS' :
            return {
                loading:false,
                post:action.payload,
                error:""
            };
        case 'FETCH_ERROR' :
            return {
                loading:false,
                post:{},
                error:"Something went wrong"
            };
        default: return initialState
    }
}

function FatchDataTwo() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
      
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
        .then(({data}) => {
            dispatch({type : 'FETCH_SUCESS', payload : data})
        })
        .catch((error) => {
            dispatch({type : 'FETCH_ERROR'})
        });
      return true;
    }, [])
    

  return (
    <div>
        {state.loading ? 'Loading':state.post.title}
        {state.error ? state.error : null }
    </div>
  )
}

export default FatchDataTwo