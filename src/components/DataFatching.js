import React, {useState, useEffect} from 'react'
import axios from 'axios';

function DataFatching() {
  const [posts, setPosts]= useState([]);
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts").then(({data}) =>{
        console.log(data);
        setPosts(data);
    }).catch(err =>{
        console.log(err);
    });
  },[]);
    return (
    <div>
        {
            posts.map(post => 
                 <li key={post.id}>{post.title}</li>
            )
        }
    </div>
  )
}

export default DataFatching