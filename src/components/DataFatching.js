import React, {useState, useEffect} from 'react'
import axios from 'axios';

function DataFatching() {
  // const [posts, setPosts]= useState({});
  const [post, setPost]= useState({});
  const [id, setId]= useState(1);
  const [idFromButtonClick, setIdFromButtonClick]= useState(1);
  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`).then(({data}) =>{
        console.log(data);
        setPost(data);
        // setPosts(data);
        // setPosts(data);
    }).catch(err =>{
        console.log(err);
    });
  },[idFromButtonClick]);

    return (
    <div>
      <input type="text" value={id} onChange={e=> setId(e.target.value)}/>
      <div>{post.title}</div>
      <button type="submit" onClick={()=>setIdFromButtonClick(id)}>FatchPost</button>
      <ul>
        {/* {
            posts.map(post => 
                 <li key={post.id}>{post.title}</li>
            )
        } */}
      </ul>
    </div>
  )
}

export default DataFatching