import { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

export const useMiddleware = (callback: Function) => {
  const [searchParams] = useSearchParams();
  const { id } = useParams();
  const params = searchParams.get('q');

  useEffect(() => {
    if (searchParams.get('q') || !!id) {
      const value = callback(params || id);
      return value;
    }
    return null;
  }, [params]);
};
