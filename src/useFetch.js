import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [IsPending, setIsPending] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Could not fetch data');
                }
                const responseData = await response.json();
                setData(responseData);
                setError(null);
                setIsPending(false);
            } catch (error) {
                if (error.name === 'AbortError') {
                    console.log('aborted');
                } else {
                    setIsPending(false);
                    setError('Could not fetch data at this moment');
                }
            }
        };

        fetchData();

    }, [url]);

    return { data, error, IsPending };
};

export default useFetch;