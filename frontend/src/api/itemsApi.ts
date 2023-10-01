class ItemsApi {
  fetchItemByIdEndpoint = `${process.env.REACT_APP_API_ITEMS_ENDPOINT}/`;
  fetchItemsByQueryEndpoint = `${process.env.REACT_APP_API_ITEMS_ENDPOINT}?q=`;

  fetchItemById(param: string) {
    return fetch(this.fetchItemByIdEndpoint + param, {
      method: 'GET',
    });
  }
  fetchItemsByQuery(query: string) {
    return fetch(this.fetchItemsByQueryEndpoint + query, {
      method: 'GET',
    });
  }
}

export default new ItemsApi();
