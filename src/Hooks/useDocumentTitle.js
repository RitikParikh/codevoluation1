import {useEffect} from 'react'

function useDocumentTitle(count) {
    useEffect(() => {
        document.title = `Count ${count}`;
        return () => {
          return true;
        }
      }, [count])
      
}

export default useDocumentTitle