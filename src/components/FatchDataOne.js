import React, {useState, useEffect} from 'react'
import axios from 'axios';


function FatchDataOne() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState({});

    useEffect(() => {
      
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
        .then(({data}) => {
            setLoading(false);
            setPost(data);
            setError('');
        })
        .catch((error) => {
            setLoading(false);
            setPost({});
            setError("Something went wrong!");
        });
      return true;
    }, [])
    

  return (
    <div>
        {loading ? 'Loading':post.title}
        {error ? error : null }
    </div>
  )
}

export default FatchDataOne