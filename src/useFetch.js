import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [IsPending, setIsPending] = useState(true);
  
    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url, { signal: abortCont.signal })
        .then(res => res.json())
        .then(data => {
            setData(data);
            setError(null);
            setIsPending(false)
        })
        .catch(err => {
            if(err.name === 'AbortError'){
                console.log('aborted');
            }else{
                setIsPending(false);
                setError('Could not fetch data at this moment');
            }
        });
        return () => abortCont.abort();
  
    },[url]);
    return {data, error, IsPending};
}

export default useFetch;