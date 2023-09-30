export interface ApiInterface {
  fetchEndpoint: (value: string) => Promise<Response>;
}
