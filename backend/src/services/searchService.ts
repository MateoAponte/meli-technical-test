import fetch from 'node-fetch';

const fetchApi = async (query: string) => {
  const res = await fetch(`${process.env.REACT_APP_SERVER_SEARCH_BY_QUERY_ENDPOINT}?q=:${query}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
  return res.json();
};

export const getSearchByQuery = () => fetchApi('celular');

export const addEntry = () => null;
