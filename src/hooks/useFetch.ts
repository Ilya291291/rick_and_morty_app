import { useState, useEffect } from 'react';
import { IData } from '../shared/types/types';

interface IOptiosns {
  page?: number | null
}


export const useFetch = (url: string, options: IOptiosns = {}, id?: string) => {
  const [data, setData] = useState<IData>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(false);

  const fetchData = async (URL=url, opts = options, signal: AbortSignal, ID = id) => {
    setLoading(true)
    setError(null)
  
    try {
      let fetchUrl = URL;

      if (ID) {
        fetchUrl = `${URL}/${ID}`;
      }

      if (opts.page) {
        fetchUrl += `?page=${opts.page}`;
      }
      const response = await fetch(`${fetchUrl}`, { ...opts, signal })
      
      if(!response.ok) {
        if(response.status === 404){
          setHasMore(false)
          return
        }
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }
      const result = await response.json()
      if(Array.isArray(result.results)){
        setData((prev) => {
          if(Array.isArray(prev)) {
            return [...prev, ...result.results];
          } else {
            return result.results;
          }
        });
      }else {
        setData(result)
      }
      setHasMore(result.results.length > 0)
    }catch (error) {
      if(error instanceof Error){
        if (error?.name === 'AbortError') {
          console.log('Fetch aborted');
        }else {
          setError(error.message);
        }
      }
      } finally {
        setLoading(false);
      }
  }

  useEffect(() => {

    const controller = new AbortController()
    const signal = controller.signal;
  
    fetchData(url, options, signal, id)
    return () => {
      controller.abort();
    };
  }, [options.page])


  return { 
    data, 
    hasMore,
    isLoading, 
    error,
    refetch: fetchData
  };

};
