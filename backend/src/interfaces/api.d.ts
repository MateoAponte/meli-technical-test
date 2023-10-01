/**
 * Interfaz que determina que debe tener por minimo cada Api instanciada de la clase común
 */
export interface ApiInterface {
  baseUrl: string;
  fetchEndpoint: (value: string) => Promise<Response>;
}
