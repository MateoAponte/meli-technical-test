import axios from 'axios';

class ItemsApi {
  fetchItemByIdEndpoint = `${process.env.REACT_APP_API_ITEMS_ENDPOINT}/`;
  fetchItemsByQueryEndpoint = `${process.env.REACT_APP_API_ITEMS_ENDPOINT}?q=`;

  fetchItemById(param: string) {
    return axios.get(this.fetchItemByIdEndpoint + param);
  }
  fetchItemsByQuery(query: string) {
    return axios.get(this.fetchItemsByQueryEndpoint + query);
  }
}

export default new ItemsApi();
