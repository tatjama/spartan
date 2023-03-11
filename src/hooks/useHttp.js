import { useState, useCallback } from 'react';
import { urlBase, key } from '../utils/constants';

export const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
   
    const fetching = useCallback ( async (setFetchResponse, body) => {
        setIsLoading(true);
        setError(null);
        const url = body.i ? 
        `${urlBase}/?i=${body.i}&apikey=${key}` 
        : `${urlBase}/?apikey=${key}&s=${body.query}&type=${body.type}&y=${body.year}&page=${body.page}`;
        
        try {
            const response = await fetch(url, {
                method:'GET',
                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            });
                
             if (response.ok) { 
                const data =  await response.json();
                if (data.Response === 'False'){
                    setError(data.Error)
                }  else {
                    data?.Search?.length  > 0 || data.Title ? setFetchResponse(data): setError(data)
                }                    
                    
              } 
        } catch (error) {
            setError(error.message || 'Something went wrong!');
        }
       setIsLoading(false);
    },[])
    
    return {isLoading, error, fetching, setError}
}
