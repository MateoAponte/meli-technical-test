import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useMiddleware = (callback: Function) => {
  const [searchParams] = useSearchParams();
  const params = searchParams.get('q');

  useEffect(() => {
    if (searchParams.get('q')) {
      const value = callback(params);
      return value;
    }
    return null;
  }, [params]);
};
